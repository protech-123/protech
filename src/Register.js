import React from 'react'
import './App.css'

export const Register = () => {
    return (
        <>
        <div className="Register">
            <div className="login login-2">
                <br />
            <h1>Sign up 🚀</h1>

            <form className="login flex-box-8">
            <span><b>Username</b><input type="name" name="username" placeholder="username"/></span>
                <span><b>Email id  </b><input type="email" name="email" placeholder="email"/></span>
                <br />
    
                <span><b>Password</b><input type="password" name="password" placeholder="password"/></span>
                <a href="./Customer">Already have an account? login</a>
                <br />
            </form>
            </div>

        </div>
            
        </>
    )
}

export  default Register;