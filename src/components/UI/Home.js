import '../../App.css';
import React from 'react';

import Main from '../main';
import Rols from '../rols';
import Information from '../information';
import Footer from '../footer';
import { Navbar } from './Navbar';


export const Home = () => {
    return (
        <>
            <Navbar />
            <div className="App">
                <header className="info">
                    <Main />
                </header>
                <div>
                    <main>
                        <Rols />
                        <Information />
                    </main>
                    <Footer />
                </div>
            </div>
        </>
    )
}
