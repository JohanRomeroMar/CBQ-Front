import React from 'react'
import Footer from '../footer'
import { Navbar } from './Navbar'
import Contact from '../contact'
import '../../Register.css';

export const Contacto = () => {
    return (
        <div>
            <Navbar/>
                <Contact/>
            <Footer/>
        </div>
    )
}
