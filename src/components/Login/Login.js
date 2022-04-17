import React, { Component } from 'react';
import './Login.css'
import { FaFacebook, FaGoogle } from 'react-icons/fa';

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
                    <input type="email" name="email" placeholder='Email'></input>
                    <br/>
                    <input type="password" name="passWord" placeholder='Password'/>
                </form>

                <button className='loginBtn'>Login</button>
                <div>
                    <h3 id='forgotPassword'>Forgot Password?</h3>
                </div>
            
                <h4 id='lineText'>or</h4>

                <button className='fbBtn'> <FaFacebook className='fbIcon' size={20}/> Continue with Facebook</button>
                <br/>
                <button className='googleBtn'> <FaGoogle className='googleIcon' size={18}/> Continue with Google</button>        
                
            </div>

        )
    }

}
export default Login;
