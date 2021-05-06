import React from "react"
import ReactDOM from "react-dom"
import App from "../App"
import { BrowserRouter, Route } from "react-router-dom"
//import "./index.css"
//import { Provider } from "react-redux"
//import store from "./store"

ReactDOM.render(
    <BrowserRouter>
        <Route path='/' component={App} />
    </BrowserRouter>,
    document.getElementById("root"))

