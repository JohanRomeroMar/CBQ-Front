import React, { Component } from 'react';
import Card from './card';

class Rols extends Component {
    render(){
        return(
            <section className="rol">
                <div className="container">
                    <h2 className="subtitle">Perfiles<span className="point">.</span></h2>
                    <p className="copy_section">¿Qué perfil tienes?</p>
                    <article className="container-cards">
                        <Card card_title="Estudiante" card_list="Resuelve el cuestionario" card_button ="Registrate"/>
                        <Card card_title="Psicólogo" card_list="Resultados de pacientes" card_button ="Ingresar"/>
                        <Card card_title="Investigador" card_list="Datos y estadisticas" card_button ="Consultar"/>
                    </article>
                </div>
            </section>
        )
    }
}

export default Rols;