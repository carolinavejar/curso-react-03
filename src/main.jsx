import React from "react";
import ReactDOM from "react-dom/client";

import  { App as HelloWorldApp } from './HelloWorldApp'
import  { FirstApp } from './FirstApp';
import  './style.css'


ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title="Titulo de Pruebas" subTitle={ 123 }/>
    </React.StrictMode>
)