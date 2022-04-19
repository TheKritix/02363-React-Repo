import React, { Component } from 'react';
import './Login.css'
import { FaGoogle } from 'react-icons/fa';
import Button from '@mui/material/Button';
import GoogleIcon from '@mui/icons-material/Google';

/*inspiration for line with text: https://stackoverflow.com/questions/5214127/css-technique-for-a-horizontal-line-with-words-in-the-middle 
*https://www.freecodecamp.org/news/how-to-use-react-icons/
*
*/

class Login extends Component{
    render(){
        return(
            <div className='inputLogin'>
                <h1 id='headlineLogin'>Sign in</h1>
                <form> 
                    <input type="email" name="email" placeholder='Email' required></input>
                    <br/>
                    <input type="password" name="passWord" placeholder='Password' required></input>
                </form>

                <button className='loginBtn'>Login</button>
                <div>
                    <h3 id='forgotPassword'>Forgot Password?</h3>
                </div>
            
                <h4 id='lineText'>or</h4>

                <button className='regBtn'  onClick={event => window.location.href='/registerpage'}> Create an account</button>
                <br/>
                <br/>

                <Button className='googleBtn' variant="outlined" 
                style={{ borderRadius:40, height:44 }}
                startIcon={<GoogleIcon/>} >Continue with Google</Button>
                
                
            </div>

        )
    }

}
export default Login;
