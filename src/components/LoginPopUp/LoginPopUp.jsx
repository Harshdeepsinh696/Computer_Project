import React, { useState } from 'react'
import './LoginPopUp.css'
import { SquareX } from 'lucide-react';

const LoginPopUp = ({ setShowLogin }) => {

    const [currentState, setCurrentState] = useState("Login");


    return (
        <div className='login-popup'>
            <form action="" className='login-popup-container'>
                <div className='login-popup-title'>
                    <h2>{currentState}</h2>
                    <SquareX onClick={() => setShowLogin(false)} className='cross' />
                </div>
                <div className='login-popup-input'>
                    {currentState === "Login" ? <></> : <input type="text" placeholder='Enter Your Name...' required />}
                    <input type="email" placeholder='Enter Your email...' required />
                    <input type="password" placeholder='Enter Your Password...' required />
                </div>
                <button>{currentState === "Sign Up" ? "Create Account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the term of use & privecy policy.</p>
                </div>
                {currentState === "Login"
                    ? <p>Create a new account? <span onClick={()=>setCurrentState("Sign Up")}>Click here</span> </p>
                    : <p>Already have an account? <span onClick={()=>setCurrentState("Login")}>Login here</span> </p>
                }
            </form>
        </div>
    )
}

export default LoginPopUp
