import './App.css';
import React from 'react';
import Navigation from './components/navigation';
import Main from './components/main';
import Rols from './components/rols';
import Information from './components/information';
import Footer from './components/footer';
import { Routers } from './router/Routers';

function App() {
  return (
    <>
      <Routers/>
    </>
  )
    
}

export default App;