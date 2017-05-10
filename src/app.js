import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Images from './components/Images'
import WebcamComponent from './components/Webcam'
import Register from './components/Register'
import Login from './components/Login'

class Mobile extends Component {

    render() {
        return (
            <div>
                Here is your Mission:  (mission goes here)
                
                
                <WebcamComponent />
                <Register />
                <Login />
            </div>
        )
    }
}

class Desktop extends Component {

    render() {
        return (
            <div>
               <h1 className="text-center">Desktop</h1>
               <Images />
               <WebcamComponent />
               <Login />
            </div>
        )
    }
}

                
if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ReactDOM.render(<Mobile />, document.getElementById('root'))
}else{
    ReactDOM.render(<Desktop />, document.getElementById('root'))
}