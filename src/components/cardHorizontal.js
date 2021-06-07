import React, { Component } from 'react';
import image from '../2.jpg';
class cardHorizontal extends Component {
    render(){
        return(
            <React.Fragment>
                <div className="card">
                    <div className="cards_text">
                        <h3 className="card_title">CBQ</h3>
                        <p className="card_list">Cuestionario Ciberbullying</p>
                        <p className="card_copy">Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto
                            esse
                            voluptate eaque? Nam est hic laborum repellendus? Reiciendis, ullam.</p>
                        <a href="#" className="card_button">Más información</a>
                    </div>
                </div>
                    <div className="background">
                        <img src={image} alt="" className="background_img"/>
                        <div className="background_text">
                        <h3 className="background_copy">Informacion sobre que significa CBQ</h3>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default cardHorizontal;