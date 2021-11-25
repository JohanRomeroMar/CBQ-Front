import React, { useState } from 'react'

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
import { CBQ } from '../components/UI/CBQ';
import { CBQV } from '../components/UI/CBQV';
import { usecontext } from '../Hooks/useContext';


export const Routers = () => {
  const [datos, setDatos] = useState([])
  return (
    <Router>
      <>
      <usecontext.Provider value = {{datos, setDatos}}>
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/registro" component={Registro} />
              <Route exact path="/actualizar/:id" component={UpdatePage} />
              <Route exact path="/perfiles" component={Perfiles} />
              <Route exact path="/informacion" component={Informacion} />
              <Route exact path="/contacto" component={Contacto} />
              <Route exact path="/users" component={Usuarios} />
              <Route exact path="/CBQ" component={CBQ} />
              <Route exact path="/CBQV" component={CBQV} />
              <Redirect exact to="/" component={Home} />
          </Switch>
        </usecontext.Provider>

      </>
    </Router>
  )
}
