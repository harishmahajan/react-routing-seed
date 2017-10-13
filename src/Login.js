import React, { Component } from 'react';
import './assets/css/App.css'


var logoPic = require('./assets/images/img_avatar2.png');
class Login extends Component {
    render() {
        return (
            <div className="boxcontainer">
                <h1>Login</h1>
                <form>
                    <div className="bbb">
                        <img src={logoPic} height='100px' width='100px' /> <br />
                        <label><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="uname" required /> <br />

                        <label><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required /> <br />

                        <button type="submit">Login</button>
                        <input type="checkbox" checked="checked" /> Remember me <br />
                    </div>

                    <div>
                        <button type="button" class="cancelbtn">Cancel</button>
                        <span class="psw">Forgot <a href="#">password?</a></span>
                    </div>
                </form>
            </div>
        )
    }

}

export default Login


