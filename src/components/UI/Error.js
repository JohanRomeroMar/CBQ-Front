import React from 'react'
import Footer from '../footer'
import { Navbar } from './Navbar'
import '../../Register.css';

export const Error = () => {
    return (
        <div>
            <Navbar/>
                <div>Ups, ¿Te equivocaste?, revisa porfavor a donde quieres ir.</div>
            <Footer/>
        </div>
    )
}
