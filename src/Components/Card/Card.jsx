import React, { Component } from 'react'
import './card.css'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='card-wrapper'>
                <img src={this.props.img} alt='videoPicture'></img>
                <h2 onClick={() => this.props.iframe(this.props.id)}>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div >
        )
    }
}

export default Card;