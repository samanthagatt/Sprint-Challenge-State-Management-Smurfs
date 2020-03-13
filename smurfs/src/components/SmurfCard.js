import React from "react";
import { Link } from "react-router-dom";
import { Card, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        textDecoration: "none",
        padding: "20px 40px",
        transition: "all 0.5s",
        "&:hover": {
            background: "lightgray"
        },
        margin: 10
    }
});

export const SmurfCard = ({ smurf }) => {
    const classes = useStyles();
    return (
        <Card className={classes.root} component={Link} to={`/smurfs/${smurf.id}`}>
            <Typography gutterBottom variant="h5" component="h3">{smurf.name}</Typography>
            <Typography variant="body1"><b>Age:</b> {smurf.age}</Typography>
            <Typography variant="body1"><b>Height:</b> {smurf.height}</Typography>
        </Card>
    );
};