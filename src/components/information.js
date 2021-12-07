import React, { Component } from 'react';
import CardHorizontal from './cardHorizontal';
import image from '../5.jpg';
import image2 from '../6.jpg';

class information extends Component {
    render(){
        return(
            <section className="information container">
                <div className="container">
                    <h2 className="subtitile">Informacion<span className="point">.</span></h2>
                    <p className="copy_section">¿Qué es el CBQ y el CBQ-V?</p>
                    <article className="container-bg">
                        <CardHorizontal card_img={image} card_title="CBQ" card_list="Cuestionario Ciberbullying"/>
                        <CardHorizontal card_img={image2} card_title="CBQ-V" card_list="Cuestionario Ciberbullying Victimisation"/>
                    </article>
                </div>
            </section>
        )
    }
}

export default information;