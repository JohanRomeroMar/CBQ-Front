import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useHistory } from "react-router-dom";
import { cities } from '../DB/cities'

const Register = () => {
    const [fName, setFirstName] = useState()
    const [lName, setLastName] = useState()
    const [docType, setDocType] = useState()
    const [doc, setDoc] = useState()
    const [birthDate, setBrithDate] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [gender, setGender] = useState()
    //const [departamentos, setDepartamentos] = useState()
    const [dataDepartamentos, setDataDepartamentos] = useState("Amazonas")
    const [dataCiudades, setDataCiudades] = useState()

    const history = useHistory()
    //const [CBQA,]

    const { datos, setDatos } = useContext(usecontext)

    const departamentos = cities.map((departamento,  i) => cities[i].departamento)

    const ciudades = cities.find((municipios, i) => cities[i].departamento == dataDepartamentos)
    useEffect(() => {
        setDataCiudades(ciudades.ciudades[0])
    }, [departamentos])

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fName, lName, docType, doc, birthDate, email, phoneNum, gender, dataDepartamentos, dataCiudades
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
                                    <span class="details">Grado</span>
                                    <select aria-label="Grado" required>
                                        <option selected value="">Selecciona tu grado</option>
                                        <option value="7">Septimo</option>
                                        <option value="8">Octavo</option>
                                        <option value="9">Noveno</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Nombre del colegio</span>
                                    <input type="text" placeholder="Nombre de tu colegio" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Direccion del colegio</span>
                                    <input type="text" placeholder="Direccion de tu colegio" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Estrato</span>
                                    <select aria-label="Estrato" required>
                                        <option selected value="">Selecciona tu estrato</option>
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>
                                    </select>
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
                                <div class="input-box">
                                    <span class="details">Departamento</span>
                                    <select aria-label="Genero" onChange={(e) => { setDataDepartamentos(e.target.value) }} >
                                        <option disabled value={0}>selecciona un departamento</option>
                                        {
                                            departamentos.map(i => (
                                                <option value={i}>{i}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                {dataDepartamentos && 
                                <div class="input-box">
                                <span class="details">Ciudad</span>
                                <select aria-label="Genero" onChange={(e) => { setDataCiudades(e.target.value) }} >
                                    {ciudades &&
                                        ciudades.ciudades.map(i => (
                                            <option value={i}>{i}</option>
                                        ))
                                    }
                                </select>
                            </div>
                                }
                                
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