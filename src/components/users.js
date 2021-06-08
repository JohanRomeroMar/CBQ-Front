import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';

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
    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            nombre, email, pass
        }
        postUsers(data).then(result => {
            console.log('usuario guardado');
        });
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
                                <div class="users">
                                    <i class="fas fa-user"></i>
                                    <div class="users-info">
                                        <p class="users-information">Nombre:  {item.name}</p>
                                        <p class="users-information">Documento: {item.name}</p>
                                        <p class="users-information">Tipo de usuario: {item.name}</p>
                                    </div>
                                    <div class="button">
                                        <input type="submit" value="Actualizar"></input>
                                        <input type="submit" value="Eliminar"></input>
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