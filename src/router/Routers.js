import React from 'react'

import '../App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { Home } from '../components/UI/Home';
import { Registro } from '../components/UI/Registro';
import { Perfiles } from '../components/UI/Perfiles';
import { Informacion } from '../components/UI/Informacion';
import { Contacto } from '../components/UI/Contacto';
import { Usuarios } from '../components/UI/Usuarios';

export const Routers = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Registro" component={Registro} />
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
