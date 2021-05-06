import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
    return (
        <div className="navbar-container">

            <div className="navbar-logo">
                <img className="logo-pic" src="../assets/logo.png" />
                <p className="logo-text">Real Estate</p>
            </div>
            <div className="navbar-content">
                <div className="navbar-container-button">
                    <div className="navbar-button">
                        <div className="navbar-button-calculadora">
                            <img className="calculadora-pic" src="../assets/calculadora.png" />
                            <div>
                                <a>Contratá tu garantía</a>
                            </div>
                        </div>
                        <div className="navbar-button-publicar">
                            <a>Registrarse</a>
                        </div>
                        <div className="navbar-button-ingresar">
                            <Link to={'/iniciarsesion'}>Iniciar Sesión</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}