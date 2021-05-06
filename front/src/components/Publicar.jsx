import React, { useState } from 'react'
import axios from 'axios'

export default () => {

    // const [datos, setDatos] = useState({
    //     email: " ",
    //     password: " "
    // })

    // const handleInputChange = (evento) => {
    //     setDatos({
    //         ...datos,
    //         [evento.target.name]: evento.target.value
    //     })
    // }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     axios.post('http://localhost:3000/api/usuarios/login')
    //         .then((datos) => {
    //             setDatos(datos)
    //         })
    // }

    return (
        <>
            <div className="publicar-container">
                <h2 className="publicar-container-text">Datos Usuario</h2>
                <div className="publicar-container-datos">
                    <p>id:</p>
                    <p>Nombre:</p>
                    <p>Apellido:</p>
                    <p>eMail:</p>
                    <p>Password:</p>
                </div>
            </div>
            <h2 className="publicar-container-text-prop">Publicar Propiedades</h2>
            <div className="publicar-container-card">
                <div className="publicar-container-card-marco">
                    <div className="publicar-container-pic">url_pic</div>
                    <div className="publicar-container-card-datos">
                        <div className="publicar-card-datos">
                            <p>Tipo:</p>
                            <input className="card-publicar-id"
                                type="text"
                                name="id"
                            />
                        </div>
                        <div className="publicar-card-datos">
                            <p>Precio:</p>
                            <input className="card-publicar-id"
                                type="text"
                                name="id"
                            />
                        </div>
                        <div className="publicar-card-datos">
                            <p>Dirección:</p>
                            <input className="card-publicar-id"
                                type="text"
                                name="id"
                            />
                        </div>
                        <div className="publicar-card-datos">
                            <p>Localidad:</p>
                            <input className="card-publicar-id"
                                type="text"
                                name="id"
                            />
                        </div>
                        <div className="publicar-card-datos">
                            <p>Disponibilidad:</p>
                            <input className="card-publicar-id"
                                type="text"
                                name="id"
                            />
                        </div>
                    </div>
                    <div className="publicar-card-boton">
                        Publicar
                    </div>
                </div>

            </div>
        </>
    )
}

