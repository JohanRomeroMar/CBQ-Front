import React, { Component } from 'react';
import CardHorizontal from './cardHorizontal';

class information extends Component {
    render(){
        return(
            <section className="information container">
                <div className="container">
                    <h2 className="subtitile">Informacion<span className="point">.</span></h2>
                    <p className="copy_section">¿Qué es el CBQ y el CBQ-V?</p>
                    <article className="container-bg">
                        <CardHorizontal/>
                        <CardHorizontal/>
                    </article>
                </div>
            </section>
        )
    }
}

export default information;