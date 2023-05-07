import React from "react";
import {AuthForm} from "./login"
import {Link} from "react-router-dom"

const Register = (props) => {
    return(
        <div className = "loginContainer">
            <div className = "inner">
                <div className = "logo">Animation Chat</div> 
                <div className = "title">Sign up</div>
                <AuthForm/>
                <div className="switchOption">
                    Alredy got an accaunt? <Link to = "/login">sign in</Link>
                </div> 
             </div> 
        </div>
    )
};

export default Register;