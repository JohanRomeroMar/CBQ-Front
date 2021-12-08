import React, { Fragment } from 'react'
import Footer from '../footer'
import information from '../information'
import { Navbar } from './Navbar'

export const Informacion = () => {
    return (
        <>
            <Navbar/>
            <div class="body-register">
                <div class="container-register">
                    <div class="title2">Registro de contacto</div>
                    <div class="content">
                        <form>
                            <div class="user-details">
                                <div class="input-box">
                                    <span class="details">Asunto</span>
                                    <input type="text" placeholder="Ingresa tus nombres"  required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Apellidos</span>
                                    <input type="text" placeholder="Ingresa tus apellidos" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Tipo de documento</span>
                                    <select required >
                                        <option selected value="">Tipo de documento</option>
                                        <option value="1">Tarjeta de identidad</option>
                                        <option value="2">Cedula de ciudania</option>
                                        <option value="3">Pasaporte</option>
                                    </select>
                                </div>
                                <div class="input-box">
                                    <span class="details">Documento</span>
                                    <input type="text" placeholder="Ingresa tu documento" required></input>
                                </div>
                            </div>
                            <div class="button">
                                {/* <NavLink to={`/CBQ`}></NavLink> */}
                                <input type="submit" value="Iniciar" ></input>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
        
    )
}
