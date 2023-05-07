import React from "react";
import eye from "../assets/eye.png";
import eyeclose from "../assets/close-eye.png";
import google from "../assets/google.png";
import {Link} from "react-router-dom"

const Login = (props) => {
    return (
        <div className = "loginContainer">
            <div className = "inner">
                <div className = "logo">Animation Chat</div> 
                <div className = "title">Sign in</div>
                <AuthForm/>
                <div className="grid grid-2 grid-gap-2"> 
                    <div className="socialButton">
                        <img src={google} /> 
                        <span>Google</span>
                    </div> 
                </div> 
                <div className="switchOption">
                    Don't have an accout yet? <Link to = "/register">sign up</Link>
                </div> 
             </div> 
        </div>
    )
};

export const AuthForm = (props) => {
    return(
        <form>
                <input className="input-field" placeholder="Username"/>
                <div className="input-container"> 
                    <input 
                        className = "input-field" 
                        placeholder="password" 
                        type="password"
                        autoComplete="new-password"
                    />
                    <img src={eye}/>
                    <img src={eyeclose}/>
                </div>

                {
                    props.login && (
                        <div className="flex justify-end">
                            <Link to="/">Forgot Password</Link> 
                        </div> 
                    )
                }
                <button type="submit">Login</button> 
                </form>
    );
};

export default Login;