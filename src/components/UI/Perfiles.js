import React from 'react'
import Card from '../card'
import Footer from '../footer'
import { Navbar } from './Navbar'
import '../../Perfil.css';
import image from '../../2.jpg';
import image2 from '../../3.jpg';
import { Link, NavLink } from "react-router-dom";

export const Perfiles = () => {
    return (
        <>
            <Navbar />
            <div class="main-profile">
                <div class="profile-container">
                    <div class="profile-title">Perfil</div>
                    <div class="profile-info">
                        <div class="profile-content">
                            <img src={image2} class="img-profile" />
                        </div>
                        <div class="profile-content">
                            <div class="profile-content-title">Psicólogo</div>
                            <div class="profile-content-text">El Psicólogo es el encargado de poder revisar las respuestas de los estudiantes y con ella poder proveer un resultado para saber si seguir con un proceso de apoyo al estudiante que lo padezca o lo provoque, como asi mismo poder 
                            generar un acompañamiento inicial a los estudiantes.</div>
                        </div>
                    </div>
                    <div class="profile-info">
                        <div class="profile-content">
                            <div class="profile-content-title">Estudiante</div>
                            <div class="profile-content-text">El estudiante resolverá los cuestionarios que se le proveen, los cuales serán tratados de manera confidencial por parte de los psicólogos para poder recibir una ayuda en el caso de ser necesario. </div>
                        </div>
                        <div class="profile-content">
                            <img src={image} class="img-profile" />
                        </div>
                    </div>
                    <div class="profile-title">CBQ y CBQ-V</div>
                    <div class="profile-info">
                        <div class="profile-content">
                            <img src={image2} class="img-profile" />
                        </div>
                        <div class="profile-content">
                            <div class="profile-content-title">CBQ</div>
                            <div class="profile-content-text">CBQ es un instrumento de psicometría realizado por: Esther Calvete Zumalde de: Departamento de Personalidad, Evaluación y Tratamiento Psicológico. En: Universidad de Deusto, Apdo. 1,
                             48080-Bilbao, es usado para la ayuda e identificación de victimarios de Cyberbullying, el mismo está compuesto por una serie de preguntas abiertas y cerradas.</div>
                        </div>
                        <div class="profile-content">
                            <div class="profile-content-title">CBQ-V</div>
                            <div class="profile-content-text">CBQ-V es un instrumento de psicometría  realizado por: Esther Calvete Zumalde de: Departamento de Personalidad, Evaluación y Tratamiento Psicológico. En: Universidad de Deusto, Apdo. 1,
                             48080-Bilbao, principalmente es el complemento de CBQ pero como proposito principal la ayuda e identificación de victimas de Cyberbullying, está compuesto por una serie de preguntas abiertas y cerradas.</div>
                        </div>
                        <div class="profile-content">
                            <img src={image} class="img-profile" />
                        </div>
                    </div>
                    <div class="profile-button-container">
                    <div className="button">
                        <NavLink className="delete-a" to={`/`}>Regresar</NavLink>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
