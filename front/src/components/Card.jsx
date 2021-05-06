import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default () => {
    const [propiedades, setPropiedades] = useState([])

    useEffect(() => {
        axios.get(`/api/propiedades`)
            .then((v) => {
                setPropiedades(v.data)
            })
    }, [])
    //console.log(propiedades)
    return (
        <div>
            <h2 className="titulo-prop">Últimas Propiedades</h2>
            <div className="container-card-principal">
                {propiedades.map(propiedad => {
                    return <div className="container-card" key={propiedad.id}>
                        <div className="pic-container-card">
                            <div>{propiedad.url_pic}</div>
                        </div>
                        <div className="texto-container-card">
                            <p>Id: {propiedad.id}</p>
                            <p>Tipo: {propiedad.tipo}</p>
                            <p>Precio: {propiedad.precio}</p>
                            <p>Direccion: {propiedad.direccion}</p>
                            <p>Localidad: {propiedad.localidad}</p>
                            <p>Disponbilidad: {propiedad.disponible}</p>
                        </div>
                        <div className="button-container-card">
                            <Link to={`/propiedad/${propiedad.id}`}>Ver Propiedad</Link>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}