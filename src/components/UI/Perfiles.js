import React from 'react'
import Card from '../card'
import Footer from '../footer'
import { Navbar } from './Navbar'
import '../../Perfil.css';
import image from '../../2.jpg';
import image2 from '../../3.jpg';

export const Perfiles = () => {
    return (
        <>
            <Navbar />
            <div class="main-profile">
                <div class="profile-container">
                    <div class="profile-title">Perfil</div>
                    <div class="profile-info">
                        <div class="profile-content">
                            <img src={image2} class="img-profile" />
                        </div>
                        <div class="profile-content">
                            <div class="profile-content-title">Psicólogo</div>
                            <div class="profile-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                dolore amet dicta iure quod iste voluptatum. Cum magni similique, iste, dolorem omnis aperiam
                                vitae architecto incidunt autem accusantium ducimus dolores! </div>
                        </div>
                    </div>
                    <div class="profile-info">
                        <div class="profile-content">
                            <div class="profile-content-title">Estudiante</div>
                            <div class="profile-content-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
                                dolore amet dicta iure quod iste voluptatum. Cum magni similique, iste, dolorem omnis aperiam
                                vitae architecto incidunt autem accusantium ducimus dolores! </div>
                        </div>
                        <div class="profile-content">
                            <img src={image} class="img-profile" />
                        </div>
                    </div>
                    <div class="profile-button-container">
                        <div class="profile-button">
                            <input type="submit" value="Regresar" class="button-CBQ"></input>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}
