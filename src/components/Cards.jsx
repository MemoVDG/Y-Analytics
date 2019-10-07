import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import AssessmentIcon from '@material-ui/icons/Assessment';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import PaymentModal from './PaymentModal';

const styles = theme => ({
    card: {
        display: "flex"
    },
    details: {
        display: "flex",
        flexDirection: "column"
    },
    content: {
        flex: "1 0 auto"
    },
    cover: {
        width: 151
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing.unit,
        paddingBottom: theme.spacing.unit
    },
    playIcon: {
        height: 38,
        width: 38
    }
});

function MediaControlCard(props) {
    const { classes, theme } = props;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.cover}
                image={props.data.snippet.thumbnails.default.url}
                title="Live from space album cover"
            />
            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Typography component="h5" variant="h5">
                        {props.data.snippet.channelTitle}
                    </Typography>
                    <Typography variant="subtitle1" color="textSecondary">
                        {props.data.snippet.description}
                    </Typography>
                </CardContent>
            </div>

            <div className={classes.details}>
                <CardContent className={classes.content}>
                    <Button variant="contained" className={classes.button}>
                        <AssessmentIcon />
                        <Link to='/analyze'>
                            Default
                        </Link>
                    </Button>

                    //TODO: Check if the user already pay
                    <PaymentModal/>
                </CardContent>
            </div>
            {console.log(props.data.snippet)}
        </Card>
    );
}

MediaControlCard.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired
};

export default withStyles(styles, { withTheme: true })(MediaControlCard);
