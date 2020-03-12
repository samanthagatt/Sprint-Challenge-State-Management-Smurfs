import React from "react";
import { TextField, makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
    root: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textFields: {
        margin: 5,
        width: 250
    }
})

export const AddSmurfForm = () => {
    const { root, textFields } = useStyles();
    return (
        <form className={root}>
            <TextField className={textFields} variant="outlined" label="Name" />
            <TextField className={textFields} variant="outlined" label="Age" />
            <TextField className={textFields} variant="outlined" label="Height" />
        </form>
    );
};