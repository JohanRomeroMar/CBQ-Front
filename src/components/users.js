import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';
import { Link, NavLink } from "react-router-dom";

const Users = () => {//componente de estados
    const [users, setUsers] = useState()

    const getUsers = async () => {
        return axios.get('http://localhost:4000/api/auth/users');
    }

    useEffect(() => {//solo ejecuta cuando entra
        getUsers().then(result => {
            setUsers(result.data)
        })
    }, [])

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
                                        <p className="users-information">Tipo de usuario: {"estudiante"}</p>
                                    </div>
                                    <div className="button">
                                        <NavLink className="delete-a" to={`/actualizar/${item._id}`}>ver resultados</NavLink>
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