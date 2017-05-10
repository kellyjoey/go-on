import React, { Component } from 'react'

class Login extends Component {
    render(){
        return(
            <div id="Login" className="container">
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
            </div>
        )
    }
        
    doLogin(event){
        event.preventDefault();
        //grabbing the submitted data
        console.log(this.refs.username.value);
        let username = this.refs.username.value;
        let password = this.refs.password.value;
        //clear out the input boxes
        this.refs.username.value = '';
    }
}

export default Login;

