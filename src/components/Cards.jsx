import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PaymentModal from './Payment/PaymentModal';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        margin: 10,
    },
    textlink: {
        color: 'inherit',
        textDecoration: 'inherit'
    },
});

function MediaControlCard(props) {
    const classes = useStyles();


    return (
        <Card className={classes.card}>
            <CardActionArea>
                {console.log(props.data)}
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="140"
                    image={props.data.snippet.thumbnails.default.url}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5">{props.data.snippet.channelTitle}</Typography>
                    <Typography gutterBottom variant="h6">{props.data.snippet.title}</Typography>
                    <Typography variant="body2" color="textSecondary" component="p">{props.data.snippet.description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className='Card-actions'>
                <Button variant="contained" size="small" color="primary"><AssessmentIcon /><Link to={'/analyze/' + props.data.snippet.channelId + '/' + props.data.id.videoId} className={classes.textlink}>Analize</Link></Button>

                { ! props.isSubscriber ?
                    <PaymentModal />
                    :
                    null
                }
            </CardActions>
        </Card>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default MediaControlCard;
