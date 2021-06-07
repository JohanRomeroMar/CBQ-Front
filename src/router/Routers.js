import React from 'react'

import '../App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import { Home } from '../components/UI/Home';
import { Register } from '../components/UI/Register';
import { Perfiles } from '../components/UI/Perfiles';
import { Informacion } from '../components/UI/Informacion';
import { Contacto } from '../components/UI/Contacto';
import { Navbar } from '../components/UI/Navbar';
import { Usuarios } from '../components/UI/Usuarios';

export const Routers = () => {
    return (
        <Router>
        <>
            
                <Navbar/>
                <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Register" component={Register} />
                <Route exact path="/Perfiles" component={Perfiles} />
                <Route exact path="/Informacion" component={Informacion} />
                <Route exact path="/Contacto" component={Contacto} />
                <Route exact path="/Users" component={Usuarios} />
                <Redirect to="/" component={Home} />
                </Switch>
           
        </>
         </Router>
    )
}
