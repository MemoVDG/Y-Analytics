import React, { Component } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../actions";

import NavbarPage from './NavbarLinks/NavbarPage';

import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";
import TextField from '@material-ui/core/TextField';
import api, { baseParams } from '../api';

import Cards from './Cards';

class Home extends Component {

  state = {
    search: '',
    channels: [],
  };

  handleLogout = () => {
    const { dispatch } = this.props;
    dispatch(logoutUser());
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleClick = async () => {
    console.log(this.state.search);
    const response = await api.get('/search', {
      params: {
        ...baseParams,
        q: this.state.search
      }
    });

    this.setState({ channels: response.data.items }, () => { this.filterData() });

  }


  filterData = () => {
    console.log(this.state.channels);
  }

  render() {
    const { isLoggingOut, logoutError } = this.props;

    return (
      <div>
        <NavbarPage />
        <div className="App-header">
          <TextField
            label="Search your youtuber"
            InputProps={{
              endAdornment: (
                <InputAdornment>
                  <IconButton>
                    <SearchIcon onClick={this.handleClick} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            onChange={this.handleChange}
            id='search'
          />
          {(this.state.channels).map((n) => {
            return (
              <Cards data={n}/>
            )
          })}
        </div>
        {/* <button onClick={this.handleLogout}>Logout</button>
        {isLoggingOut && <p>Logging Out....</p>}
        {logoutError && <p>Error logging out</p>} */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
