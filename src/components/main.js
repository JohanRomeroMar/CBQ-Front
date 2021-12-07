import React, { Component } from 'react';
import image from '../4.png';
import { Link } from "react-router-dom";
class Main extends Component {
    render() {
        return (
            <section className="container info_main">
                <div className="info_texts">
                    <h1 className="title">Cuestionario <span className="title--active">ciberbullying</span></h1>
                    <p className="copy">¿Deseas resolverlo?</p>
                    <p className="copy copy_active">¡Registrarte!</p>
                    <Link to={`./Registro`} className="register">Registrate</Link>
                </div>
                <img src={image} className="mockup"></img>
            </section>
        )
    }
}

export default Main;