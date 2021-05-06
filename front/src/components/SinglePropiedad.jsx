import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default ({ propiedad }) => {
    const [propiedad1, setPropiedad1] = useState([])

    useEffect(() => {
        axios.get(`api/propiedades/${propiedad}`)
            .then((v) => {
                setPropiedad1(v)
            })
    }, [])
    console.log(propiedad1)
    return (
        <div className="container-card-1" >
            <div className="pic-container-card">
                <div>{propiedad.url_pic}</div>
            </div>
            <div className="texto-container-card">
                <p>Tipo: {propiedad.tipo}</p>
                <p>Precio: {propiedad.precio}</p>
                <p>Direccion: {propiedad.direccion}</p>
                <p>Localidad: {propiedad.localidad}</p>
                <p>Disponbilidad: {propiedad.disponible}</p>
            </div>
        </div>
    )
}