import React, { useState } from 'react'
import axios from 'axios'
import Navbar from './Navbar'
import Buscador from './Buscador'

export default () => {

    const [datos, setDatos] = useState({
        email: " ",
        password: " "
    })

    const handleInputChange = (evento) => {
        setDatos({
            ...datos,
            [evento.target.name]: evento.target.value
        })
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        axios.post('http://localhost:3000/api/usuarios/login', { datos }).then(() => {
            console.log("Funciona")
        })
        .catch((error) => {
                console.log(error + "ERROR")
        })
    }

    return (
        <>
            <Navbar />
            <Buscador />
            <div className="iniciar-sesion">
                <div className="sesion-container">
                    <form className="form-sesion-contanier" onSubmit={handleSubmit}>
                        <h2>Login</h2>
                        <br></br>
                        <label>
                            email:
                        <input
                                type="email"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            password:
                        <input
                                type="text"
                                name="password"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />

                        <br />
                        <input className="sesion-button" type="submit" value="Enviar" />
                    </form>
                </div>
            </div>
        </>
    )
}

