import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';
import { useHistory } from "react-router-dom";

const CBQF = () => {
    const [CBQ1, setCBQ1] = useState()
    const [CBQ2, setCBQ2] = useState()
    const [CBQ3, setCBQ3] = useState()
    const [CBQ4, setCBQ4] = useState()
    const [CBQ5, setCBQ5] = useState()
    const [CBQ6, setCBQ6] = useState()
    const [CBQ7, setCBQ7] = useState()
    const [CBQ8, setCBQ8] = useState()

    const history = useHistory()

    const [CBQA, setCBQA] = useState(null)    

    const {datos, setDatos} = useContext(usecontext)

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [CBQ1, CBQ2, CBQ3, CBQ4, CBQ5, CBQ6, CBQ7, CBQ8]
        setCBQA({...datos,CBQA:data})
       
    }
    useEffect(() => {
        console.log(CBQA);
        if(CBQA){
            setDatos(CBQA);
            history.replace('/CBQV')
        }
    }, [CBQA])
    useEffect(() => {
        console.log(datos);
    }, [datos])


    return (
        <>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">CBQ</div>
                    <div class="content">
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="text" placeholder="Ingresa tus nombres" onChange={(e) => { setCBQ1(e.target.value) }} value={CBQ1} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta2</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" onChange={(e) => { setCBQ2(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta3</span>
                                    <select required onChange={(e) => { setCBQ3(e.target.value) }}>
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta4</span>
                                    <input type="text" placeholder="Ingresa tu documento" onChange={(e) => { setCBQ4(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta5</span>
                                    <input type="date" onChange={(e) => { setCBQ5(e.target.value) }} value={CBQ5} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta6</span>
                                    <input type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => { setCBQ6(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta7</span>
                                    <input type="text" placeholder="Ingresa tu número de celular" onChange={(e) => { setCBQ7(e.target.value) }} required></input>
                                </div>

                                <div class="input-box">
                                    <span class="details">pregunta8</span>
                                    <select aria-label="Genero" onChange={(e) => { setCBQ8(e.target.value) }} required>
                                        <option selected value="">Genero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Prefiero no decirlo</option>
                                    </select>
                                </div>
                            </div>
                            <div class="button">
                                <input type="submit" value="Registrar" onSubmit={handleSubmit}></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default CBQF;