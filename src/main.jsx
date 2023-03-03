import React from "react";
import ReactDOM from "react-dom/client";

import  { App as HelloWorldApp } from './HelloWorldApp'
import  { FirstApp } from './FirstApp';
import  './style.css'
import { CounterApp } from "./CounterApp";


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value = {1899} />
    </React.StrictMode>
)