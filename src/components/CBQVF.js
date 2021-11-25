import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useParams } from 'react-router';

const CBQVF = () => {
    const [CBQV1, setCBQV1] = useState()
    const [CBQV2, setCBQV2] = useState()
    const [CBQV3, setCBQV3] = useState()
    const [CBQV4, setCBQV4] = useState()
    const [CBQV5, setCBQV5] = useState()
    const [CBQV6, setCBQV6] = useState()
    const [CBQV7, setCBQV7] = useState()
    const [CBQV8, setCBQV8] = useState()
    //const [CBQA,]

    const [CBQVA, setCBQVA] = useState(null)    

    const {datos, setDatos} = useContext(usecontext)
    


    const postUsers = async (data) => {
        return axios.post('http://localhost:4000/api/auth/register', data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = [CBQV1, CBQV2, CBQV3, CBQV4, CBQV5, CBQV6, CBQV7, CBQV8]
        setCBQVA({...datos,CBQVA:data})
       
    }
    useEffect(() => {
        console.log(CBQVA);
        if(CBQVA){
            postUsers(CBQVA).then(result => {
                console.log('usuario guardado');
            }
        );}
    }, [CBQVA])
    useEffect(() => {
        console.log(datos);
    }, [datos])


    return (
        <>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">CBQ-V</div>
                    <div class="content">
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="text" placeholder="Ingresa tus nombres" onChange={(e) => { setCBQV1(e.target.value) }} value={CBQV1} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta2</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" onChange={(e) => { setCBQV2(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <select required onChange={(e) => { setCBQV3(e.target.value) }}>
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="text" placeholder="Ingresa tu documento" onChange={(e) => { setCBQV4(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="date" onChange={(e) => { setCBQV5(e.target.value) }} value={CBQV5} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => { setCBQV6(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <input type="text" placeholder="Ingresa tu número de celular" onChange={(e) => { setCBQV7(e.target.value) }} required></input>
                                </div>

                                <div class="input-box">
                                    <span class="details">pregunta1</span>
                                    <select aria-label="Genero" onChange={(e) => { setCBQV8(e.target.value) }} required>
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

export default CBQVF;