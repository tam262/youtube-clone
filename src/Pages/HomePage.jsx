import React, { Component } from 'react'
import './homePage.css'
import Header from '../Components/Header/Header.jsx'
import Card from '../Components/Card/Card.jsx'
import Iframe from '../Components/Iframe/Iframe.jsx'

class HomePage extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <>
                <Header click={this.props.click} search={this.props.search}
                ></Header> <div className='cards'>{this.props.isVideoSelected && <Iframe isVideoSelected={this.props.isVideoSelected}></Iframe>}
                {this.props.data.length>0? this.props.data.map(e =>
                    <Card title={e.snippet.title} desc={e.snippet.description} img={e.snippet.thumbnails.medium.url} id={e.id.videoId} iframe={this.props.iframe}></Card>
                ):<h1>Your Search Results...</h1>}</div>
            </>
        );
    }
}

export default HomePage;