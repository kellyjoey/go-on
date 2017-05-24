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

     cameraClick(){
        this.screenshot();
        $(".currentVid").hide();
        $(".capture").hide();
        $("#audio")[0].play();
        $(".whiteCover").show();
        $(".whiteCover").fadeOut(400);
        
        
        
     }

    render() {
        return (
        <div className="row">
            <div className="whiteCover"></div>
        <div className="col-xs-12">

            <audio id="audio">
            <source src="cameraShutter.mp3" type="audio/mpeg" />            
        </audio>
        <header className ="page-header text-center">
                <h1 className="heading">Go-On!</h1>
            </header>
        <Webcam className="center-block currentVid" audio={false} ref="webcam" screenshotFormat="image/png" />
        <button className="btn btn-success center-block capture" onClick={this.cameraClick.bind(this)}>Capture</button>
        { this.state.screenshot ? <div><img className="center-block currentScreenshot" src={this.state.screenshot} /> <button className="uploadButton btn btn-success center-block" data-image={this.state.screenshot}>Share</button> <button className="cancelButton btn btn-danger center-block" data-image={this.state.screenshot}>Cancel</button></div>: null }
        
        </div>
        </div>
        )
    }
}


export default WebcamComponent;

