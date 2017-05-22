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
        <header className ="page-header text-center">
                <h1 className="heading">Go-On!</h1>
            </header>
        <Webcam className="center-block currentVid" audio={false} ref="webcam" screenshotFormat="image/png" />
        <br/>
        <button className="center-block" onClick={this.screenshot.bind(this)}>Capture</button>
        { this.state.screenshot ? <div><img className="center-block currentScreenshot" src={this.state.screenshot} /> <button className="uploadButton center-block" data-image={this.state.screenshot}>Upload!</button> </div>: null }
        
        </div>
        )
    }
}


export default WebcamComponent;

