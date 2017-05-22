import React, { Component } from 'react';
//superagent will make our http requests (it's just an alternative to axios)
import superagent from 'superagent'
import { Link } from 'react-router-dom'

class Login extends Component {
    render(){
        return(
            <div id="Login" className="container">
            <div className="stage">
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>
                <div className="layer"></div>  
            </div>
                <div className="col-md-offset-3 col-md-6">
                    <h2 className="page-header">Account Login</h2>
                    <form onSubmit={this.doLogin.bind(this)}>
                        <div className="form-group">
                            <label>Username</label>
                            <input type= "text" className="form-control"
                            placeholder="Username" ref="username" />
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control"
                            placeholder="Password" ref="password" />
                        </div>
                        <button type="submit" className="btn btn-default">Submit</button>
                    </form>
                    {/*<form onSubmit={this.doLogout.bind(this)}>
                        <button type="submit" className="btn btn-default">Logout</button>
                    </form>*/}
                    <Link to="/register">New Here? Register an account!</Link>
                </div>
            </div>
        )
    }
        
    doLogin(event){
        event.preventDefault();
        
        console.log(this.refs.username.value);
      
        let loginRequest = superagent.post('/login')
        loginRequest.send({
            username: this.refs.username.value,
            password: this.refs.password.value
        });
        loginRequest.end((err, resp) => {
            if (err){
                alert(err, null)
            }
        })
    }

    doLogout(event){
        event.preventDefault();
        let logoutRequest = superagent.get('/logout')
        logoutRequest.end((err, resp) => {
            if (err) {
                alert(err, null)
            }
        })
    }

}

export default Login;

