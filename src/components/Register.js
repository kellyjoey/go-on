import React, { Component } from 'react'
import { Link } from 'react-router-dom'
//superagent will make our http requests (it's just an alternative to axios)
import superagent from 'superagent'
import Navbar from './Navbar';

class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {
            users: props.users
        }
    }

    render(){
        return (
          <div id="Register" className="container">
              <Navbar />
            <header className ="page-header text-center">
                <h1 className="heading">Go-On!</h1>
            </header>
              <div className="col-md-offset-3 col-md-6">
                <h2 className="page-header">Register</h2>
                    {/*// {{#if errors}}
                    //     {{#each errors}}
                    //         <div class ="alert alert-danger"> {{msg}}</div>	
                    //     {{/each}}
                    // {{/if}}*/}
                <form onSubmit={this.addRegister.bind(this)}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Name"
                        ref="name" />
                    </div>
                <div className="form-group">
                    <label>Username</label>
                    <input type="text" className="form-control"
                    placeholder="Username" ref="username" required />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="email" className="form-control"
                    placeholder="Email" ref="email" required />
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                    placeholder="Password" ref="password" required />
                </div>
                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control"
                    placeholder="Password" ref="password2" required />
                </div>
                <button type="submit" className="btn btn-default">Submit</button>
                </form>
                </div>
          </div>
        )
    }

    addRegister(event){
        event.preventDefault();
        //grabbing the submitted data
        console.log(this.refs.name.value);

        let password = this.refs.password.value
        let password2 = this.refs.password2.value
        
        
        if (password !== password2 ){
            alert("Passwords must match")
        } else { 
        //clear out the input boxes
        // this.refs.name.value = '';

        //prepare request for superagent
        let signupRequest = superagent.post('/register')
        // console.log("signupRequest:")
        // console.log(signupRequest)
        
        signupRequest.send({
            'name': this.refs.name.value,
            'username': this.refs.username.value,
            'email': this.refs.email.value,
            'password': this.refs.password.value,
            'password2': this.refs.password2.value 
        })
        
        signupRequest.end((err, resp) => {
            if (err){
                alert(err, null)
            }
        })

    } 
        window.location.replace("#/login"); //redirects to this React component
    }

}

export default Register;