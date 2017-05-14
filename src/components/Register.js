import React, { Component } from 'react'
//superagent will make our http requests (it's just an alternative to axios)
import superagent from 'superagent'

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
                placeholder="Username" ref="username" />
	        </div>
	        <div className="form-group">
                <label>Email</label>
                <input type="email" className="form-control"
                placeholder="Email" ref="email" />
	        </div>
	        <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                placeholder="Password" ref="password" />
	        </div>
	        <div className="form-group">
                <label>Confirm Password</label>
                <input type="password" className="form-control"
                placeholder="Password" ref="password2" />
	        </div>
	        <button type="submit" className="btn btn-default">Submit</button>
            </form>
          </div>
        )
    }

    addRegister(event){
        event.preventDefault();
        //grabbing the submitted data
        console.log(this.refs.name.value);
        // const params = {
        //     'name': this.refs.name.value,
        //     'username': this.refs.username.value,
        //     'email': this.refs.email.value,
        //     'password': this.refs.password.value,
        // }
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

}

export default Register;
