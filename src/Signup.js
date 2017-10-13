import React, { Component } from 'react';

class Signup extends Component {
    render() {
        return (
            <div>
                <h1>SignUp</h1>
                <form>
                    <label><b>Email</b></label> <br/>
                    <input type="text" placeholder="Enter Email" name="email" required/><br/>

                    <label><b>Password</b></label><br/>
                    <input type="password" placeholder="Enter Password" name="psw" required/><br/>

                    <label><b>Repeat Password</b></label><br/>
                    <input type="password" placeholder="Repeat Password" name="psw-repeat" required/><br/>

                    <input type="checkbox" checked="checked"/> Remember me
                    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p><br/>

                    <div class="clearfix">
                    <button type="button"  class="cancelbtn">Cancel</button>
                    <button type="submit" class="signupbtn">Sign Up</button>
                    </div>
                </form>
                
            </div>
        );
  }
}

export default Signup
