import Webcam from 'react-webcam'
import React, { Component } from 'react'

 class WebcamComponent extends Component {

     constructor(props){
         super(props);
         this.state = {screenshot: null}
     }
     screenshot(){
         let screenshot = this.refs.webcam.getScreenshot();
         this.setState({screenshot: screenshot});
     }

    render() {
        return (
        <div className="col-xs-12">
        <Webcam className="center-block" audio={false} ref="webcam"/>
        <br/>
        <button className="center-block" onClick={this.screenshot.bind(this)}>Capture</button>
        { this.state.screenshot ? <img className="center-block" src={this.state.screenshot} /> : null }
        </div>
        )
    }
}


export default WebcamComponent;

