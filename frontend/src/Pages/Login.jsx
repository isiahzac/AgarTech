import React from 'react'
import '../Pages/css/Login.css'
import { Link } from 'react-router-dom'


export const Login = () => {
  return (
    <div className="login">
        <div className="login-container">
            <h1>Login</h1>
            <div className="login-fields">
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
            </div>
            <button>Entrar</button>
            <p className="login-login">Todavía no tienes cuenta? <Link to="/signup"><span>Click aquí</span></Link></p>
            <div className="login-agree">
                <input type="checkbox" name='' id=''/>
                <p>By continuing, i agree to the <span>Terms of use</span> & <span>Privacy Policy</span></p>
            </div>
        </div>
    </div>
  )
}
