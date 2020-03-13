import React from "react";
import { TextField, Button, makeStyles, Typography } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createNewSmurf, updateSmurf, deleteSmurf } from "../actions";
import { useState } from "react";
import { useEffect } from "react";

const useStyles = makeStyles({
    error: {
        marginBottom: 10,
        color: "red"
    },
    form: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    textFields: {
        margin: 5,
        width: 250
    },
    button: {
        margin: 10
    },
    deleteButton: {
        background: "firebrick",
        color: "white",
        "&:hover": {
            background: "indianred"
        }
    }
})

export const SmurfForm = ({ smurf: { name, age, height, id } = {} }) => {
    const classes = useStyles();

    const [newName, setNewName] = useState(name || "");
    const [newAge, setNewAge] = useState(age || "");
    const [newHeight, setNewHeight] = useState(height || "");

    const dispatch = useDispatch();
    const error = useSelector(state => id ? state.updatingSmurfError : state.creatingSmurfError);

    const handleSubmit = () => {
        id ? dispatch(updateSmurf(newName, newAge, newHeight, id)) : dispatch(createNewSmurf(newName, newAge, newHeight));
    }

    useEffect(() => {
        if (!id && (error === "")) {
            setNewName("");
            setNewAge("");
            setNewHeight("");
        }
    }, [id, error]);

    return (
        <section>
            { error &&
                <Typography className={classes.error} variant="body2">{error}</Typography>
            }
            <form className={classes.form}>
                <TextField className={classes.textFields} variant="outlined" label="Name" value={newName} onChange={e => setNewName(e.target.value)} />
                <TextField className={classes.textFields} variant="outlined" label="Age" value={newAge} onChange={e => setNewAge(e.target.value)} />
                <TextField className={classes.textFields} variant="outlined" label="Height" value={`${newHeight}`} onChange={e => setNewHeight(e.target.value)} />
            </form>
            <Button className={classes.button} variant="contained" onClick={handleSubmit}>{id ? "Update" : "Add New"} Smurf</Button>
            { id && <Button className={classes.deleteButton} variant="contained" onClick={() => dispatch(deleteSmurf(id))}>Delete Smurf</Button> }
        </section>
    );
};