import React, { Fragment } from "react";
import './App.css';

import CreateAccount from "./components/CreateAccount/CreateAccount";

function App() {
    return (
        <Fragment>
            <div className="container">
                <CreateAccount />
            </div>
        </Fragment>
    );
}

export default App;
