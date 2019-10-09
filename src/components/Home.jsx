import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import NavbarPage from './NavbarLinks/NavbarPage';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from "@material-ui/core/IconButton";
import api, { baseParams } from '../api';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import Cards from './Cards';
import logo from '../images/logo.png'
import Grid from '@material-ui/core/Grid';



const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
  paperCard: {
    width: '70%',
    margin: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around'

  }
}))

// width: "70%", margin: 10, padding: 10, display: 'flex', flexDirection: 'row', flexWrap : 'wrap', justifyContent : 'space-around'

function Home(props) {

  const [search, setSearch] = useState('');
  const [channels, setChannels] = useState([]);
  const { isLoggingOut, logoutError } = props;
  const classes = useStyles();


  const handleClick = async () => {
    console.log(search);
    const response = await api.get('/search', {
      params: {
        ...baseParams,
        q: search
      }
    });
    setChannels(response.data.items);
  }

  useEffect(() => {
    filterData();
  });


  const filterData = () => {
    console.log(channels);
  }


  return (
    <div>
      <NavbarPage />
      <div className="App-content" >
        <img src={logo} alt="logo" width="300mvin" />
        <Paper className={classes.root} style={{ width: "50%" }}>
          <InputBase
            className={classes.input}
            placeholder="Search"
            onChange={e => setSearch(e.target.value)}
          />
          <Divider className={classes.divider} orientation="vertical" />

          <IconButton className={classes.iconButton} aria-label="search" onClick={handleClick}>
            <SearchIcon />
          </IconButton>
        </Paper>

        {channels.length > 0 ?
          <Paper className={classes.paperCard}>
            {channels.length > 0 ?
              (channels).map((n) => {
                return (
                  <Cards data={n} />
                )
              })
              :
              null
            }
          </Paper>
          : null
        }
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    isLoggingOut: state.auth.isLoggingOut,
    logoutError: state.auth.logoutError
  };
}

export default connect(mapStateToProps)(Home);
