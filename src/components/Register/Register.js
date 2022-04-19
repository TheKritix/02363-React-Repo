import React, { Component} from 'react';
import './Register.css';

class Register extends Component {
    render() {
        return (
            <div className="registerInput">
                <h1 id="headlineRegister">Register</h1>
                <p id="description">Please fill in this form to create an account.</p>
                <form> 
                    <input type="firstname" name="firstname" placeholder='Firstname'></input>
                    <input type="lastname" name="lastname" placeholder='Lastname'/>
                    <br/>
                    <input type="adress" name="address" placeholder='Adress'/>
                    <br/>
                    <input type="postcode" name="postcode" placeholder='Postcode'/>
                    <input type="city" name="city" placeholder='City'/>
                    <br/>
                    <input type="phonenumber" name="phonenumber" placeholder='Phonenumber'/>
                    <br/>

                    <input type="university" name="university" placeholder='University'/>
                    <input type="country" name="country" placeholder='Country'/>

                    <br/>
                    <input type="email" name="email" placeholder='Email'/>
                    <input type="password" name="password" placeholder='Password'/>
                </form>

            </div>
        )
    }
}

export default Register;