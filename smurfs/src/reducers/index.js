import {
    FETCHING_SMURFS_START,FETCHING_SMURFS_SUCCESS, FETCHING_SMURFS_FAILURE,
    CREATING_SMURF_START, CREATING_SMURF_SUCCESS, CREATING_SMURF_FAILURE,
    UPDATE_SMURF_START,UPDATE_SMURF_SUCCESS, UPDATE_SMURF_FAILURE,
    DELETE_SMURF_START,DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE
} from "../actions";

const initialState = {
    isFetchingAllSmurfs: false,
    allSmurfsError: "",

    isCreatingSmurf: false,
    creatingSmurfError: "",

    isUpdatingSmurf: false,
    updatingSmurfError: "",

    isDeletingSmurf: false,
    deletingSmurfError: "",

    smurfs: []
};

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        case FETCHING_SMURFS_START:
            return {
                ...state,
                isFetchingAllSmurfs: true
            }
        case FETCHING_SMURFS_SUCCESS:
            return {
                ...state,
                isFetchingAllSmurfs: false,
                smurfs: action.payload,
                allSmurfsError: ""
            }
        case FETCHING_SMURFS_FAILURE:
            return {
                ...state,
                isFetchingAllSmurfs: false,
                allSmurfsError: action.payload
            }


        case CREATING_SMURF_START:
            return {
                ...state,
                isCreatingSmurf: true
            }
        case CREATING_SMURF_SUCCESS:
            return {
                ...state,
                isCreatingSmurf: false,
                creatingSmurfError: ""
            }
        case CREATING_SMURF_FAILURE:
            return {
                ...state,
                isCreatingSmurf: false,
                creatingSmurfError: action.payload
            }


        case UPDATE_SMURF_START:
            return {
                ...state,
                isUpdatingSmurf: true
            }
        case UPDATE_SMURF_SUCCESS:
            return {
                ...state,
                isUpdatingSmurf: false,
                updatingSmurfError: ""
            }
        case UPDATE_SMURF_FAILURE:
            return {
                ...state,
                isUpdatingSmurf: false,
                updatingSmurfError: action.payload
            }

        case DELETE_SMURF_START:
            return {
                ...state,
                isDeletingSmurf: true
            }
        case DELETE_SMURF_SUCCESS:
            return {
                ...state,
                isDeletingSmurf: false,
                deletingSmurfError: ""
            }
        case DELETE_SMURF_FAILURE:
            return {
                ...state,
                isDeletingSmurf: false,
                deletingSmurfError: action.payload
            }


        default:
            return state;
    }
};