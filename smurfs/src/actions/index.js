import axios from "axios";

export const FETCHING_SMURFS_START = "FETCHING_SMURFS_START";
export const FETCHING_SMURFS_SUCCESS = "FETCHING_SMURFS_SUCCESS";
export const FETCHING_SMURFS_FAILURE = "FETCHING_SMURFS_FAILURE";

export const fetchAllSmurfs = () => dispatch => {
    dispatch({ type: FETCHING_SMURFS_START });
    axios
        .get("http://localhost:3333/smurfs")
        .then(res => {
            dispatch({ type: FETCHING_SMURFS_SUCCESS, payload: res.data });
        })
        .catch(err => {
            dispatch({ type: FETCHING_SMURFS_FAILURE, payload: err.response.data.Error})
        });
}

export const CREATING_SMURF_START = "CREATING_SMURF_START";
export const CREATING_SMURF_SUCCESS = "CREATING_SMURF_SUCCESS";
export const CREATING_SMURF_FAILURE = "CREATING_SMURF_FAILURE";

export const createNewSmurf = (name, age, height) => (dispatch, getState) => {
    if (getState().isCreatingSmurf) { return }
    dispatch({ type: CREATING_SMURF_START });
    axios
        .post("http://localhost:3333/smurfs", { name, age, height })
        .then(() => {
            dispatch({ type: CREATING_SMURF_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: CREATING_SMURF_FAILURE, payload: err.response.data.Error})
        });
}

export const UPDATE_SMURF_START = "UPDATE_SMURF_START";
export const UPDATE_SMURF_SUCCESS = "UPDATE_SMURF_SUCCESS";
export const UPDATE_SMURF_FAILURE = "UPDATE_SMURF_FAILURE";

export const updateSmurf = (name, age, height, id) => dispatch => {
    dispatch({ type: UPDATE_SMURF_START });
    axios
        .put(`http://localhost:3333/smurfs/${id}`, { name, age, height })
        .then(() => {
            dispatch({ type: UPDATE_SMURF_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: UPDATE_SMURF_FAILURE, payload: err.response.data.Error})
        });
};

export const DELETE_SMURF_START = "DELETE_SMURF_START";
export const DELETE_SMURF_SUCCESS = "DELETE_SMURF_SUCCESS";
export const DELETE_SMURF_FAILURE = "DELETE_SMURF_FAILURE";

export const deleteSmurf = (id) => dispatch => {
    dispatch({ type: DELETE_SMURF_START });
    axios
        .delete(`http://localhost:3333/smurfs/${id}`)
        .then(() => {
            dispatch({ type: DELETE_SMURF_SUCCESS });
        })
        .catch(err => {
            dispatch({ type: DELETE_SMURF_FAILURE, payload: err.response.data.Error})
        });
};
