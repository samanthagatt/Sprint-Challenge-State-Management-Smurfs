import React, { Children, cloneElement } from "react";
import { Typography, makeStyles } from "@material-ui/core";

const useStyles =  makeStyles({
    root: {
        display: "flex",
        background: "cadetblue",
        padding: 20,
        marginBottom: 20
    },
    title: {
        flexGrow: 1,
        color: "white"
    },
    children: {
        margin: 10
    }
});

export const Header = ({ title, children }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            { title &&
                <Typography className={classes.title} variant="h3" component="h1">{title}</Typography>
            }
            <nav>
                { Children.map(children, child => (
                    cloneElement(child, { className: classes.children})
                )) }
            </nav>
        </div>
    );
};