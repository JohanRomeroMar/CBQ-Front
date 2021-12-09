import axios from 'axios';//peticiones
import React, { Component, useEffect, useState, useContext } from 'react';
import { usecontext } from '../Hooks/useContext';
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState()
    const [password, setPassword] = useState()
    const [data, setData] = useState()

    const history = useHistory()
    //const [CBQA,]

    const postUsers = async (data) => {
        return axios.post('http://localhost:4000/api/auth/autenticate', data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setData({username, password})
    }

    useEffect(() => {
        if(data){
            postUsers(data).then(result => {
                if(result.data){
                    history.replace('/Users');
                }else{
                    alert('Lo sentimos datos incorrectos');
                }
            });
        }
    }, [data])

    return (
        <>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">Login</div>
                    <div class="content">
                        <form onSubmit={handleSubmit}>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Usuario</span>
                                    <input type="text" placeholder="Ingresa tu usuario" onChange={(e) => { setUsername(e.target.value) }} required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Password</span>
                                    <input type="password" placeholder="Ingresa tu contraseña" onChange={(e) => { setPassword(e.target.value) }} required></input>
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

export default Login;