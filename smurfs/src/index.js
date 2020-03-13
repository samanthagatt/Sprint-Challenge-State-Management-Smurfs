import React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { reducer } from "./reducers";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./components/App";

const store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById("root")
);
