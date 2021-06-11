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
import { UpdatePage } from '../components/UI/UpdatePage';

export const Routers = () => {
  return (
    <Router>
      <>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/registro" component={Registro} />
          <Route exact path="/actualizar/:id" component={UpdatePage} />
          <Route exact path="/perfiles" component={Perfiles} />
          <Route exact path="/informacion" component={Informacion} />
          <Route exact path="/contacto" component={Contacto} />
          <Route exact path="/users" component={Usuarios} />
          <Redirect to="/" component={Home} />
        </Switch>

      </>
    </Router>
  )
}
