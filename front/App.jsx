import React from 'react'
import axios from 'axios'
import { Route, Switch, BrowserRouter } from "react-router-dom"
import Home from './src/components/Home'
import Footer from './src/components/Footer'
import Banner from './src/components/Banner'
import Navbar from './src/components/Navbar'
import Card from './src/components/Card'
import SinglePropiedad from './src/components/SinglePropiedad'
import Iniciarsesion from './src/components/Iniciarsesion'
import Publicar from './src/components/Publicar'


class App extends React.Component {
    render() {

        return (
            <div className="container">

                <BrowserRouter >
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route path={'/propiedad/:id'} render={({ match }) => < SinglePropiedad propiedad={match.params.id} />} />
                        <Route path='/iniciarsesion' render={() => < Iniciarsesion />} />
                        <Route path='/publicar' render={() => < Publicar />} />
                    </Switch>
                </BrowserRouter>
                <Footer />
            </div>
        )
    }
}

export default App

{/* <Navbar />
<Banner />
<Card path={'/'} />
<Route path={'/propiedad/:id'} render={({ match }) => < SinglePropiedad propiedad={match.params.id} />} /> */}