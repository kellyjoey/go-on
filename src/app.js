import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Images from './components/Images'
import WebcamComponent from './components/Webcam'
import Register from './components/Register'
import Login from './components/Login'
import { HashRouter as Router, Route } from 'react-router-dom';

class Mobile extends Component {

    render() {
        return (
            <div>
                <h1>Mobile</h1>
                <form method="POST" action="/upload">
                    <input type="file" name='pic' capture="capture" accept="image/*" />
                </form>
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

const Routes = (props) => (
  <Router {...props}>
    <Route exact path="/" component={Desktop} />
  </Router>
);

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);
