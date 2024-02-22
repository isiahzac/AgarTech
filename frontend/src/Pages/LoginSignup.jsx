import React from 'react'
import '../Pages/css/LoginSignup.css'
import { Link } from 'react-router-dom'

export const LoginSignup = () => {
  return (
    <div className="loginsignup">
        <div className="loginsignup-container">
            <h1>Sign Up</h1>
            <div className="loginsignup-fields">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Sign Up</button>
            <p className="loginsignup-login">Ya tienes una cuenta? <Link to="/login"><span>Click aquí</span></Link></p>
            <div className="loginsignup-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, i agree to the <span>Terms of use</span> & <span>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}
