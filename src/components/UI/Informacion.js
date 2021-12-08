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
                                    <span class="details">Correo</span>
                                    <input type="email" placeholder="Ingresa tu correo" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Asunto</span>
                                    <input type="text" placeholder="Ingresa el asunto" required></input>
                                </div>
                                <div class="input-box">
                                    <span class="details">Contenido</span>
                                    <input type="text" placeholder="Ingresa tu documento" required></input>
                                </div>
                            </div>
                            <div class="button">
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
