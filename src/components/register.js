import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useHistory } from "react-router-dom";

const Register = () => {
    const [fName, setFirstName] = useState()
    const [lName, setLastName] = useState()
    const [docType, setDocType] = useState()
    const [doc, setDoc] = useState()
    const [birthDate, setBrithDate] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [gender, setGender] = useState()
    
    const history = useHistory()
    //const [CBQA,]

    const {datos, setDatos} = useContext(usecontext)
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fName, lName, docType, doc, birthDate, email, phoneNum, gender
        }
        setDatos(data);
        history.replace('/CBQ')
        console.log(data);
    }

    return (
        <>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">Registro</div>
                    <div class="content">
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Nombres</span>
                                    <input type="text" placeholder="Ingresa tus nombres" onChange={(e) => { setFirstName(e.target.value) }} value={fName} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Apellidos</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" onChange={(e) => { setLastName(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Tipo de documento</span>
                                    <select required onChange={(e) => { setDocType(e.target.value) }}>
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Documento</span>
                                    <input type="text" placeholder="Ingresa tu documento" onChange={(e) => { setDoc(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Fecha de nacimiento</span>
                                    <input type="date" onChange={(e) => { setBrithDate(e.target.value) }} value={birthDate} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Correo electrónico</span>
                                    <input type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => { setEmail(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Número de celular</span>
                                    <input type="text" placeholder="Ingresa tu número de celular" onChange={(e) => { setPhoneNum(e.target.value) }} required></input>
                                </div>

                                <div class="input-box">
                                    <span class="details">Genero</span>
                                    <select aria-label="Genero" onChange={(e) => { setGender(e.target.value) }} required>
                                        <option selected value="">Genero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Prefiero no decirlo</option>
                                    </select>
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

export default Register;