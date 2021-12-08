import React, { Component } from 'react';
import image from '../5.jpg';
import { Link, NavLink } from "react-router-dom";

class cardHorizontal extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="cards_text">
                        <h3 className="card_title">{this.props.card_title}</h3>
                        <p className="card_list">{this.props.card_list}</p>
                        <p className="card_copy">CBQ es un instrumento de psicometría realizado por: Esther Calvete Zumalde de: Departamento de Personalidad, Evaluación y Tratamiento Psicológico. En: Universidad de Deusto, Apdo. 1, 48080-Bilbao, su uso es para la ayuda e identificación de victimarios de Cyberbullying</p>
                        <div className="card-button">
                            <NavLink className="delete-a" to={`/perfiles`}>Más información</NavLink>
                        </div>
                    </div>
                </div>
                    <div className="background">
                        <img  src={this.props.card_img} alt="" className="background_img"/>
                        <div className="background_text">
                        <h3 className="background_copy">Informacion sobre que significa CBQ</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default cardHorizontal;