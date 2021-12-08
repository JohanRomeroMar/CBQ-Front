import React, { Component } from 'react';


class Card extends Component {
    render() {
        return (
            <div className="card">
                <img className="card_img" src={this.props.card_img} alt=""></img>
                <div className="cards_text">
                    <p className="card_list">{this.props.card_list}</p>
                    <h3 className="card_title">{this.props.card_title}</h3>
                    <p className="card_copy">{this.props.card_text}</p>
                    
                </div>
            </div>
        )
    }
}

export default Card;

//<a href="#" className="card_button">{this.props.card_button}</a>