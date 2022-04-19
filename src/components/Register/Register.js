import React, { Component} from 'react';
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="registerInput">
                <h1 id="headlineRegister">Register</h1>
                <p id="description">Please fill in this form to create an account.</p>
                <form> 
                    <input type="firstname" name="firstname" placeholder='First name' required></input>
                    <br/>
                    <input type="lastname" name="lastname" placeholder='Last name' required/>
                    <br/>
                    <input type="email" name="email" placeholder='Email' required/>
                    <br/>
                    <input type="password" name="password" placeholder='Password'  minlength="8" required/>
                    <br/>
                    <input type="submit" value="Register"/>
                </form>

            </div>
        )
    }
}

export default Register;