import React from 'react'
import '../../App.css';
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => {
    return (
        <>
            <div className="info">
                <nav className="nav_info ">
                    <div className="container nav_container ">
                        <div className="logo">
                            <h2 className="logo_name">CBQ<span className="point">.</span></h2>
                        </div>
                        <div className="links">
                            <Link to="/" className="link">Inicio</Link>
                            <Link to="/Perfiles" className="link">Información</Link>
                            <Link to="/Contacto" className="link">Contacto</Link>
                            <Link to="/login" className="link">Iniciar Sesión</Link>
                        </div>
                    </div>
                </nav>
            </div> 
        </>
    )
}
