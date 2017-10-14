import React, { Component } from 'react';
import axios from 'axios';

class Signup extends Component {

    constructor() {
        super();
        this.state = {
            username: '',
            mail: '',
            password: '',
        };
        this._onSubmit = this._onSubmit.bind(this);
    }

    _onSubmit(e) {
        console.log(this.state);
        axios.post('http://localhost:8000/userRegister', this.state)
          .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
    }

    render() {
        return (
            <div>
                <h1>SignUp</h1>
                <form>
                    <label><b>Username</b></label> <br />
                    <input name="username" ref="username" type="text" id="username" onChange={(e) => this.setState({ username: e.target.value })} placeholder="Username" /><br />

                    <label><b>Email</b></label> <br />
                    <input type="text" placeholder="Enter Email" ref="mail" name="mail" onChange={(e) => this.setState({ mail: e.target.value })} required /><br />

                    <label><b>Password</b></label><br />
                    <input type="password" placeholder="Enter Password" ref="password" name="password" onChange={(e) => this.setState({ password: e.target.value })} required /><br />

                    <input type="checkbox" checked="checked" readOnly /> Remember me
                    <p>By creating an account you agree to our <a>Terms & Privacy</a>.</p><br />

                    <div className="clearfix">
                        <button type="button" className="cancelbtn">Cancel</button>
                        <button type="button" className="signupbtn" onClick={this._onSubmit}>Sign Up</button>
                    </div>
                </form>

            </div>
        );
    }
}

export default Signup
