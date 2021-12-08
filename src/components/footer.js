import React, { Component } from 'react';
import { Link, NavLink } from "react-router-dom";

class Footer extends Component {
    render(){
        return(
            <footer className="footer">
                <div className="contact">
                    <div className="item__contact">
                        <i className='bx bx-copyright contact__icon' ></i>
                        <h3 className="contact__title">CBQ CBQ-V</h3>
                    </div>
                    <div className="item__contact">
                        <i className='bx bx-mail-send contact__icon' ></i>
                        <h3 className="contact__title">baromero@ucatolica.edu.co</h3>
                        <h3 className="contact__title">jsromero@ucatolica.edu.co</h3>
                    </div>
                    <div className="item__contact">
                        <i className='bx bxs-edit-location contact__icon' ></i>
                        <h3 className="contact__title">Universidad Catolica de Colombia</h3>
                    </div>
                    <div className="item__contact item__contact--gold">
                        <i className='bx bxs-chat contact__icon contact__icon--modifier' ></i>

                        <a className="contact__title">
                            <div >
                                <NavLink  to={`/contacto`}>Más información</NavLink>
                            </div>
                        </a>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer;