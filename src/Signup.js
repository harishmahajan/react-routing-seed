import React, { Component } from 'react';

class Signup extends Component {
 

    _onChange(e) {
        console.log(e.target.value)
        this.setState({username: e.target.value});
        //this.state.username = e.target.value;
    }

    _onSubmit(e) {
        e.preventDefault()
        alert(this.state)
        // fetch(this.props.formAction, {
        //     headers: {
        //         'Accept': 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({description: this.state.description})
        // });

        // this.setState({description: ''});
    }

    render() {
        return (
            <div>
                <h1>SignUp</h1>
                <form onSubmit={this._onSubmit}>
                    <label><b>Username</b></label> <br/>
                    <input name="username" ref="username" type="text" id="username" onChange={this._onChange}  placeholder="Username" />
                    {/*<input type="text" placeholder="Enter username" name="username" required/><br/>*/}<br/>

                    <label><b>Email</b></label> <br/>
                    <input type="text" placeholder="Enter Email" name="email" required/><br/>

                    <label><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" name="psw" required/><br/>

                    <input type="checkbox" checked="checked" readOnly/> Remember me
                    <p>By creating an account you agree to our <a>Terms & Privacy</a>.</p><br/>

                    <div className="clearfix">
                    <button type="button"  className="cancelbtn">Cancel</button>
                    <button type="submit" className="signupbtn">Sign Up</button>
                    </div>
                </form>
                
            </div>
        );
  }
}

export default Signup
