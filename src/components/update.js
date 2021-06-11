import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';

const Update = () => {
    const [fName, setFirstName] = useState()
    const [lName, setLastName] = useState()
    const [docType, setDocType] = useState()
    const [doc, setDoc] = useState()
    const [birthDate, setBrithDate] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [gender, setGender] = useState()
    const [user, setUser] = useState()

    const {id} = useParams();
    

    const postUsers = async (data) => {
        return axios.put(`http://localhost:4000/api/auth//userUpdate/${id}`, data);
    }

    const getUser = async (id) => {
        return axios.get(`http://localhost:4000/api/auth/user/${id}`);
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUser(id).then(result => {
            
            setFirstName(result.data.fName);
            setLastName(result.data.lName);
            setDocType(result.data.docType);
            setDoc(result.data.doc);
            setBrithDate(result.data.birthDate);
            setEmail(result.data.email);
            setPhoneNum(result.data.phoneNum);
            setGender(result.data.gender);
        })
    }, [])

    useEffect(()=>{
        
    },[user])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fName, lName, docType, doc, birthDate, email, phoneNum, gender
        }
        postUsers(data).then(result => {
            console.log('usuario guardado');
        });
    }

    

    useEffect(() => {
        console.log(docType);
    }, [docType])

    useEffect(() => {
        console.log(gender);
    }, [gender])

    return (
        <>
            <div className="body-register">
                <div className="container-register">
                    <div className="title2">Actualizar</div>
                    <div className="content">
                        <form onSubmit={handleSubmit}>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details">Nombres</span>
                                    <input type="text" placeholder="Ingresa tus nombres" onChange={(e) => { setFirstName(e.target.value) }} value={`${fName}`} required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Apellidos</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" onChange={(e) => { setLastName(e.target.value) }} value={`${lName}`} required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Tipo de documento</span>
                                    <select required onChange={(e) => { setDocType(e.target.value) }} value={`${docType}`}>
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div className="input-box">
                                    <span className="details">Documento</span>
                                    <input type="text" placeholder="Ingresa tu documento" onChange={(e) => { setDoc(e.target.value) }} value={`${doc}`} required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Fecha de nacimiento</span>
                                    <input type="date" onChange={(e) => { setBrithDate(e.target.value) }} value={birthDate} required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Correo electrónico</span>
                                    <input type="email" placeholder="Ingresa tu correo electrónico" onChange={(e) => { setEmail(e.target.value) }} value={`${email}`} required></input>
                                </div>
                                <div className="input-box">
                                    <span className="details">Número de celular</span>
                                    <input type="text" placeholder="Ingresa tu número de celular" onChange={(e) => { setPhoneNum(e.target.value) }} value={`${phoneNum}`} required></input>
                                </div>

                                <div className="input-box">
                                    <span className="details">Genero</span>
                                    <select aria-label="Genero" onChange={(e) => { setGender(e.target.value) }} value={`${gender}`} required>
                                        <option selected value="">Genero</option>
                                        <option value="1">Masculino</option>
                                        <option value="2">Femenino</option>
                                        <option value="3">Prefiero no decirlo</option>
                                    </select>
                                </div>
                            </div>
                            <div className="button">
                                <input type="submit" value="Actualizar"></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Update;