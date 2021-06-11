import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Users = () => {//componente de estados
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [users, setUsers] = useState()

    const postUsers = async (data) => {
        return axios.post('http://localhost:4000/api/auth/register', data);
    }
    const getUsers = async () => {
        return axios.get('http://localhost:4000/api/auth/users');
    }
    const deleteUser = async (id) => {
        return axios.delete(`http://localhost:4000/api/auth/user/${id}`);
    }

    const handleOnDelete = (id) => {
        deleteUser(id).then(result => {
            setUsers(users.filter(item => item._id!=id));
        })
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUsers().then(result => {
            setUsers(result.data)
        })
    }, [])

    useEffect(() => {
        console.log(users);
    }, [users])

    useEffect(() => {//efectos cuando cambia
        console.log(nombre);
    }, [nombre])

    useEffect(() => {
        console.log(email);
    }, [email])

    useEffect(() => {
        console.log(pass);
    }, [pass])
    return (
        <>
            {
                (users) &&//cuando haya información
                users.map(item => {
                    return (
                        <>
                            
                                <div>
                                    <div className="users">
                                        <i className="fas fa-user"></i>
                                        <div className="users-info">
                                            <p className="users-information">Nombre:  {item.fName + " " + item.lName}</p>
                                            <p className="users-information">Documento: {item.doc}</p>
                                            <p className="users-information">Tipo de usuario: {"estudiente"}</p>
                                        </div>
                                        <div className="button">
                                            <NavLink to={`/actualizar/${item._id}`}>Actualizar</NavLink>
                                            <button value="Eliminar" onClick={() => handleOnDelete(item._id)}></button>
                                        </div>
                                    </div>
                                </div>
                            

                        </>
                    )
                })
            }
        </>
    )
}

export default Users;