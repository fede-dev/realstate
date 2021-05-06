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
        <div className="buscador-container">
            <div className="buscador-container-input">
                <input className="barra" type="text" name="email" placeholder="Dejá que la vida te sorprenda" />
                <input className="boton-buscar" type="submit" value="Buscar" />
            </div>
        </div>
    )
}