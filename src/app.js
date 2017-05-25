import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Images from './components/Images'
import WebcamComponent from './components/Webcam'
import Register from './components/Register'
import Login from './components/Login'
import { HashRouter as Router, Route } from 'react-router-dom';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';

class Mobile extends Component {

    render() {
        return (
            <div>
                <h1>Mobile</h1>
                <Images />
                <form method="POST" action="/upload">        
                    <input type="file" name='pic'  accept="image/*" capture="camera" />
                 
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
               <WebcamComponent />
               <Images />
            </div>
        )
    }
}

const Routes = (props) => (
  <Router {...props}>
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route path="/main" component={Desktop} />
        <Route path="/uploads" component={Gallery} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        {/*<Route path="/mobile" component={Mobile} />*/}
    </div>
  </Router>  
      

);

ReactDOM.render(
  <Routes />,
  document.getElementById('root')
);

// if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
//      ReactDOM.render(<Mobile />, document.getElementById('root'))
//  }else{
//      ReactDOM.render(<Desktop />, document.getElementById('root'))
//  } 
