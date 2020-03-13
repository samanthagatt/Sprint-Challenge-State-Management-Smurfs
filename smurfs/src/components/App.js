import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchAllSmurfs } from "../actions";
import { Switch, Route, Link, useLocation, matchPath } from "react-router-dom";
import { Typography, Button, Grid, makeStyles } from "@material-ui/core";

import { Header } from "./Header";
import { SmurfCard } from "./SmurfCard";
import { SmurfForm } from "./SmurfForm";
import { useEffect } from "react";

const SINGLE_SMURF_PATH = "/smurfs/:smurfId";

const useStyles = makeStyles({
    root: {
        textAlign: "center",
    }
});

const App = () => {
    const { root: rootClass } = useStyles();
    const { pathname } = useLocation();
    const { params: { smurfId } = {} } = matchPath(pathname, SINGLE_SMURF_PATH) || {};
    const smurfs = useSelector(state => state.smurfs);
    const currentSmurf = smurfs.find(smurf => smurf.id === Number(smurfId));

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllSmurfs());
    }, [dispatch, pathname]);

    return (
        <div className={rootClass}>

            <Header title="Smurf Village">
                <Button variant="contained" component={Link} to="/">Home</Button>
                <Button variant="contained" component={Link} to="/add">Add Smurf</Button>
            </Header>

            <Switch>
                <Route path="/add">
                    <SmurfForm />
                </Route>

                <Route path={SINGLE_SMURF_PATH}>
                    { currentSmurf ?
                        <SmurfForm smurf={currentSmurf} /> :
                        <Typography variant="body1">Uh oh. That smurf wasn't found</Typography>
                    }
                </Route>

                <Route exact path="/">
                    <Grid container justify="center" alignItems="center">
                        { smurfs.map(smurf => (
                            <Grid item key={smurf.id} component={SmurfCard} smurf={smurf} />
                        ))}
                    </Grid>
                </Route>

            </Switch>

        </div>
    );
};

export default App;
