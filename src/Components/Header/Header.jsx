import React, { Component } from 'react'
import './header.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    
    render() {
        return (<div className='header'>
            <img src="https://1000logos.net/wp-content/uploads/2017/05/Color-YouTube-logo.jpg" alt="slika" />
            <div className='inputAndButton'>
                <input type="text" placeholder="Search" name="user" onChange={(e) => { this.props.search(e.target.value)}}></input>
                <button onClick={() => {this.props.click()}}><img src='http://cdn.onlinewebfonts.com/svg/img_524293.png'></img></button>
            </div>
        </div>);
    }
}

export default Header;