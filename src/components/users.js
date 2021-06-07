import axios from 'axios';//peticiones
import React, { Component, useEffect, useState } from 'react';

const Users = ()=>{//componente de estados
    const [nombre, setNombre] = useState()
    const [email, setEmail] = useState()
    const [pass, setPass] = useState()
    const [users, setUsers] = useState()
    const postUsers = async (data)=>{
        return axios.post('http://localhost:4000/api/auth/register', data);
    }
    const getUsers = async () =>{
        return axios.get('http://localhost:4000/api/auth/users');
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        const data = {
            nombre, email, pass
        }
        postUsers(data).then(result => {
            console.log('usuario guardado');
        });
    }
    useEffect(()=>{//solo ejecuta cuando entra
        getUsers().then(result => {
            setUsers(result.data)
        })
    },[])

    useEffect(()=>{
        console.log(users);
    },[users])

    useEffect(()=>{//efectos cuando cambia
        console.log(nombre);
    },[nombre])

    useEffect(()=>{
        console.log(email);
    },[email])

    useEffect(()=>{
        console.log(pass);
    },[pass])
    return(
        <>
            {
                (users)&&//cuando haya información
                users.map(item => {
                    return <span>{item.name}</span>
                })
            }
            <form onSubmit={handleSubmit}>
                <div className="users">
                    <i className="fas fa-user"></i>
                    <div className="users-info">
                        <label>
                            <span>Nombre: </span>
                            <input type="text" onChange={(e)=>{setNombre(e.target.value)}}></input>
                        </label>
                        <label>
                            <span>Email: </span>
                            <input type="text" onChange={(e)=>{setEmail(e.target.value)}}></input>
                        </label>
                        <label>
                            <span>Password: </span>
                            <input type="text" onChange={(e)=>{setPass(e.target.value)}}></input>
                        </label>
                    </div>
                    <div className="button">
                         <input type="submit" value="Guardar"></input>
                    </div>
                </div>
            </form>
        </>
    )
}

export default Users;