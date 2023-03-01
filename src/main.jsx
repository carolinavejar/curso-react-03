import React from "react";
import ReactDOM from "react-dom/client";

import  { App as HelloWorldApp } from './HelloWorldApp'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <HelloWorldApp />
    </React.StrictMode>
)