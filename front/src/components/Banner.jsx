import React, { useState } from 'react'
import axios from 'axios'

export default () => {

    const [datos, setDatos] = useState({
        username: " ",
        nombre: " ",
        apellido: " ",
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
        axios.post('http://localhost:3000/api/usuarios/registro', { datos }).then(() => {
            console.log("Se creo un Usuario / Registro")
        })
        .catch((error)=>{
            console.log("Error" + error)
        })
    }

    console.log(datos)

    return (
        <div className="banner-container">
            <div className="banner-container-text">
                <div className="titular-container-text">
                    <div>
                        <h1 className="titular-text">Real Estate,</h1>
                    </div>
                    <div>
                        <h1 className="titular-text">Real Homes,</h1>
                    </div>
                    <div>
                        <h1 className="titular-text">for Real People</h1>
                    </div>
                </div>
                <div className="second-container-text">
                    <div>
                        <h3 className="titular-text-second">Propiedades buscan personas</h3>
                    </div>
                    <div>
                        <h3 className="titular-text-second">para transformase en Hogar</h3>
                    </div>
                </div>
                <div className="third-container-text">
                    <h4 className="titular-text-third">Buscá, encontrá y disfruta de tu nuevo hogar con Real Estate.</h4>
                </div>
            </div>
            <div className="registro-container">
                <form className="form-contanier" onSubmit={handleSubmit}>

                    <legend className="legend">
                        Para registrase completá el formulario:
                    </legend>
                    <div className="input-container">
                        <label>
                            username:
                        <input className="input-content"
                                type="text"
                                name="username"
                                placeholder="username:"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            nombre:
                        <input className="input-content"
                                type="text"
                                name="nombre"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            apellido:
                        <input className="input-content"
                                type="text"
                                name="apellido"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            email:
                        <input className="input-content"
                                type="email"
                                name="email"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label>
                            password:
                        <input className="input-content"
                                type="text"
                                name="password"
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <input className="form-button" type="submit" value="Enviar" />
                    </div>
                </form>
            </div>
        </div>
    )
}