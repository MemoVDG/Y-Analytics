import React, { useEffect, useState } from 'react';
import NavbarLinks from './NavbarLinks/NavbarPage';
import { Typography, Grid } from '@material-ui/core';
import BarChart from './BarChart';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';
import api, { baseParams } from '../api';
import { makeStyles } from '@material-ui/core/styles';
import apiAnalysis from '../apiAnalysis';
import { css } from '@emotion/core';
import PulseLoader from 'react-spinners/PulseLoader';

const useStyles = makeStyles({
    textlink: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
    marginStyle: {
        margin: 10
    }
});


const override = css`
    display: block;
    margin: 0 auto;
    border-color: red;
`;

function Login(props) {

    const [channelInfo, setChannelInfo] = useState([]);
    const [analysis, setAnalysis] = useState({});
    const classes = useStyles();


    useEffect(() => {
        const { match: { params } } = props;
        async function fetchAnalysis() {
            const response = await apiAnalysis.get('/search_api?videoId=' + params.videoId);
            setAnalysis(response);
        }

        fetchAnalysis();

        async function fetchData() {
            const response = await api.get('/channels', {
                params: {
                    ...baseParams,
                    id: params.userId
                }
            });
            setChannelInfo(response.data.items[0].snippet)
        }
        fetchData();
    }, []);

    return (
        <div>
            <NavbarLinks />
            <div className="App-content">
                <img src={(((channelInfo || {}).thumbnails || {}).default || {}).url} alt="Avatar" style={{ borderRadius: 50, width: 100 }} />
                <Typography variant='h3'>{channelInfo.title}</Typography>
                <Grid container style={{ width: "50%", margin: 10, textAlign: 'center' }}>
                    <Grid item xs={6}>
                        <Typography variant='h5'>{isNaN(((((analysis.data || {}).polarity || {}).positive || {}).percent) * 100) ? '' : ((((analysis.data || {}).polarity || {}).positive || {}).percent) * 100} % Positive Comments</Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <Typography variant='h5'>{isNaN(((((analysis.data || {}).polarity || {}).positive || {}).percent) * 100) ? '' : ((((analysis.data || {}).polarity || {}).negative || {}).percent) * 100} % Negative Comments</Typography>
                    </Grid>
                </Grid>
                <Button variant="contained" className={classes.marginStyle}>
                    <AssessmentIcon />
                    <Link to='/home' className={classes.textlink}> Analyze my videos</Link>
                </Button>
                {analysis.data ?
                    <BarChart positive = {((((analysis.data || {}).polarity || {}).positive || {}).percent) * 100} negative = {((((analysis.data || {}).polarity || {}).negative || {}).percent) * 100} />
                    :
                    <div style={{marginTop:100}}>
                    <PulseLoader
                    css= {override}
                    sizeUnit={'px'}
                    size={70}
                    color={'#BD10E0'}
                    loading={true}
                    />
                    </div>
                }

            </div>

        </div>
    );
}


export default Login;