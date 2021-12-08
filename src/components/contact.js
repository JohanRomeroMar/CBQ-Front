import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useHistory } from "react-router-dom";

const Contact = () => {
    const [fName, setFirstName] = useState()
    const [lName, setLastName] = useState()

    const history = useHistory()
    //const [CBQA,]

    const { datos, setDatos } = useContext(usecontext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fName, lName
        }
        setDatos(data);
        history.replace('/login')
        console.log(data);
    }

    return (
        <>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">Formulario de contacto</div>
                    <div class="content">
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Correo</span>
                                    <input type="text" placeholder="Ingresa tu correo" onChange={(e) => { setFirstName(e.target.value) }} value={fName} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Problema o inquietud</span>
                                    <input type="text" placeholder="Titulo de tu problema o inquietud" onChange={(e) => { setLastName(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">información acerca del problema o inquietud</span>
                                    <input type="text" placeholder="redacta tu problema o inquietud" onChange={(e) => { setLastName(e.target.value) }} required></input>
                                </div>
                            </div>
                            <div class="button">
                                {/* <NavLink to={`/CBQ`}></NavLink> */}
                                <input type="submit" value="Iniciar" onSubmit={handleSubmit}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Contact;