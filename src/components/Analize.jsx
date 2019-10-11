import React, { useEffect, useState } from 'react';
import NavbarLinks from './NavbarLinks/NavbarPage';
import { Typography, Grid } from '@material-ui/core';
import BarChart from './BarChart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';
import api, { baseParams } from '../api';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    textlink: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
    marginStyle : {
        margin : 10
    }
});

function Login(props) {

    const [channelInfo, setChannelInfo] = useState([]);
    const classes = useStyles();


    useEffect( () => {
        const { match: { params } } = props; 
        console.log(params);

        async function fetchData (){
            const response = await api.get('/channels', {
                params: {
                    ...baseParams,
                    id: params.userId
                }
            });
            setChannelInfo(response.data.items[0].snippet)        }
        fetchData();
    }, []);

    return (
        <div>
            <NavbarLinks />
            { console.log((((channelInfo || {}).thumbnails || {}).default || {}).url)}
            <div className="App-content">
                <img src={(((channelInfo || {}).thumbnails || {}).default || {}).url} alt="Avatar" style={{ borderRadius: 50, width: 100 }} />
                <Typography variant='h3'>{channelInfo.title}</Typography>
                <Grid container style={{ width: "50%", margin : 10, textAlign : 'center'}}>
                    <Grid item xs= {6}>
                        <Typography variant='h5'>87 % Positive Comments</Typography>
                    </Grid>
                    <Grid item xs= {6}>
                        <Typography variant='h5'>87 % Negative Comments</Typography>
                    </Grid>
                </Grid>
                <Button variant="contained" className={classes.marginStyle}>
                    <AssessmentIcon />
                    <Link to='/home' className={classes.textlink}> Analyze my videos</Link>
                </Button>
                <BarChart />

            </div>

        </div>
    );
}


export default Login;