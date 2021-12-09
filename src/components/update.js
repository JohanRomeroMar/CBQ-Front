import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link, NavLink } from "react-router-dom";

const Update = () => {
    const [fName, setFirstName] = useState()
    const [lName, setLastName] = useState()
    const [docType, setDocType] = useState()
    const [doc, setDoc] = useState()
    const [birthDate, setBrithDate] = useState()
    const [email, setEmail] = useState()
    const [phoneNum, setPhoneNum] = useState()
    const [gender, setGender] = useState()
    const [CBQA, setCBQA] = useState()
    const [CBQA1, setCBQA1] = useState()
    const [user, setUser] = useState()

    const {id} = useParams();

    const getUser = async (id) => {
        return axios.get(`http://localhost:4000/api/auth/user/${id}`);
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUser(id).then(result => {
            
            setFirstName(result.data.fName);
            setLastName(result.data.lName);
            if(result.data.docType == 1){
                setDocType('TI');
            }else if(result.data.docType == 2){
                setDocType('CC');
            }else if(result.data.docType == 3){
                setDocType('Pasaporte');
            }
            
            setDoc(result.data.doc);
            setBrithDate(result.data.birthDate);
            setEmail(result.data.email);
            setPhoneNum(result.data.phoneNum);
            if(result.data.gender == 1){
                setGender('Masculino');
            }else if(result.data.gender == 2){
                setGender('Femenino');
            }else if(result.data.gender == 3){
                setGender('Prefiero no decirlo');
            }
            setCBQA(result.data.CBQA);
        })
    }, [])

    let CBQAC = []

    // const CBQTrasnform = () =>{
    //     if(CBQA){
    //         return CBQA.array.forEach(element => {
    //             if(element == 1){
    //                 CBQAC.push
    //             }
    //         });
    //     }
    // }
    

    useEffect(()=>{
        
    },[user])


    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            fName, lName, docType, doc, birthDate, email, phoneNum, gender
        }
    }

    return (
        <>
            <div className="body-register">
                <div className="container-register">
                    <div className="title2">Datos del estudiante</div>
                    <div className="content">
                        <form>
                            <div className="button">
                                <NavLink className="delete-a" to={`/Users/`}>Volver</NavLink>
                            </div>
                            <div className="button">
                                <NavLink className="delete-a" to={`/`}>Inicio</NavLink>
                            </div>
                            <div className="user-details">
                                <div className="input-box">
                                    <span className="details" value={`${fName}`}>Nombres </span>
                                    <div>{`${fName}`}</div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Apellidos</span>
                                    <div>{`${lName}`}</div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Tipo de documento</span>
                                    <div>{`${docType}`}: {`${doc}`}</div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Fecha de nacimiento</span>
                                    <div>{birthDate}</div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Correo electrónico</span>
                                    <div>{`${email}`}</div>
                                </div>
                                <div className="input-box">
                                    <span className="details">Número de celular</span>
                                    <div>{`${phoneNum}`}</div>
                                </div>

                                <div className="input-box">
                                    <span className="details">Genero</span>
                                    <div>{`${gender}`}</div>
                                </div>
                                <div className="button">
                                        <NavLink className="delete-a" to={`/CBQA/${id}`}>Respuestas CBQ</NavLink>
                                </div>
                                <div className="button">
                                        <NavLink className="delete-a" to={`/CBQVA/${id}`}>Respuestas CBQ-V</NavLink>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Update;