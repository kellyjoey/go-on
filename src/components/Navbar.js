import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
    render(){
        return(
        <div className="navbar">
        <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
        <div className="container">
            {/*<!-- Brand and toggle get grouped for better mobile display -->*/}
            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand page-scroll" href="/">Go On</a>
            </div>

            {/*<!-- Collect the nav links, forms, and other content for toggling -->*/}
            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    <li>
                        <Link to ="/register">Join In</Link>
                    </li>
                    <li>
                        <Link to="/uploads">Gallery</Link>
                    </li>
                </ul>
            </div>
            {/*<!-- /.navbar-collapse -->*/}
        </div>
        {/*<!-- /.container-fluid -->*/}
    </nav>
    </div>
        )
    }
}

export default Navbar;