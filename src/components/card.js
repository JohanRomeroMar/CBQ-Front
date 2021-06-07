import React, { Component } from 'react';
import image from '../2.jpg';

class Card extends Component {
    render(){
        return(
            <div className="card">
                <img className="card_img" src={image} alt=""></img>
                <div className="cards_text">
                    <p className="card_list">{this.props.card_list}</p>
                    <h3 className="card_title">{this.props.card_title}</h3>
                    <p className="card_copy">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque iusto
                        esse voluptate eaque? Nam est hic laborum repellendus? Reiciendis, ullam.
                    </p>
                    <a href="#" className="card_button">{this.props.card_button}</a>
                </div>
            </div>
        )
    }
}

export default Card;