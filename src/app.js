import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Images from './components/Images'
import WebcamComponent from './components/Webcam'
import Register from './components/Register'
import Login from './components/Login'

class App extends Component {

    render() {
        return (
            <div>
                Here is your Mission:  (mission goes here)
                
                <Images />
                <WebcamComponent />
                <Register />
                <Login />
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'))