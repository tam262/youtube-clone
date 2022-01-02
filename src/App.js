import React, { Component } from 'react'
import './App.css';
import HomePage from './Pages/HomePage.jsx'

class App extends Component {
  constructor(props) {
    super(props);
    this.click = this.click.bind(this)
    this.search = this.search.bind(this)
    this.setIframe = this.setIframe.bind(this)
    this.state = {
      data: [],
      isVideoSelected: false,
      searchValue: '',
      isButtonClicked: false
    }
  }

  click() {
    this.setState({
      isButtonClicked: true
    })
  }

  search(paramentic) {
    this.setState({
      searchValue: paramentic
    })
  }

  setIframe(id) {
    this.setState({
      isVideoSelected: id
    })
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isButtonClicked !== this.state.isButtonClicked) {
      fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&key=AIzaSyCL1K_IKumqGAJ0Iv2WKbaImnI7W3y1Cyc&q=${this.state.searchValue}`)
        .then(res => res.json())
        .then(res => this.setState({
          data: res.items,
          isButtonClicked:false,
          isVideoSelected:false
        }))
    }
  }

  render() {
    return (<HomePage click={this.click} data={this.state.data} search={this.search} iframe={this.setIframe} isVideoSelected={this.state.isVideoSelected}></HomePage>);
  }
}

export default App;

