import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import { Button, Grid, makeStyles } from "@material-ui/core";

import { Header } from "./Header";
import { SmurfCard } from "./SmurfCard";
import { AddSmurfForm } from "./AddSmurfForm";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
    }
});

const App = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Header title="Smurf Village">
                <Button variant="contained" component={Link} to="/">Home</Button>
                <Button variant="contained" component={Link} to="/add">Add Smurf</Button>
            </Header>
            <Switch>
                <Route path="/add">
                    <AddSmurfForm />
                </Route>
                <Route exact path="/">
                    <Grid container justify="center" alignItems="center">
                        <Grid item component={SmurfCard} smurf={{name: "Brainey", age: 200, height: "5cm", id: 0}}></Grid>
                    </Grid>
                </Route>
            </Switch>
        </div>
    );
};

export default App;
