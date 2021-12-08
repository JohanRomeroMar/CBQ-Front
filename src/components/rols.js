import React, { Component } from 'react';
import Card from './card';
import image from '../2.jpg';
import image2 from '../3.jpg';
import { Link, NavLink } from "react-router-dom";

class Rols extends Component {
    render(){
        return(
            <section className="rol">
                <div className="container">
                    <h2 className="subtitle">Perfiles<span className="point">.</span></h2>
                    <p className="copy_section">¿Qué perfil tienes?</p>
                    <article className="container-cards">
                        <div>
                            <Card card_img={image} card_title="Estudiante" card_list="Resuelve el cuestionario" card_button ="Registrate" card_text="Con este perfil podrás resolver el cuestionario CBQ y CBQ-V respectivamente"/>
                            <div className="button">
                                <NavLink className="delete-a" to={`/registro`}>Registrate</NavLink>
                            </div>
                        </div>
                        <div>
                            <Card card_img={image2} card_title="Psicólogo" card_list="Resultados de pacientes" card_button ="Ingresar" card_text="Con este perfil podrá registrar pacientes y ver el resultado de sus pruebas"/>
                            <div className="button">
                                <NavLink className="delete-a" to={`/login`}>Ingresar</NavLink>
                            </div>
                        </div>
                    </article>
                </div>
            </section>
        )
    }
}

export default Rols;