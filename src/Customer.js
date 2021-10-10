import React from 'react'
import './App.css'

export const Customer = () => {
    return (
        <>
        <div className="customer">

            <div className="login login-2">
                <br /><br /><br />
            <h1>Login 🚀</h1>

            <form action="" className="login flex-box-8">
            
                <span><b>Email - </b><input type="email" name="email" placeholder="email"/></span>
                <br />
    
                <span><b>Password</b><input type="password" name="name-cus" placeholder="password"/></span>
                <a href="./Register">Dont have an account? Sign up</a>
                <br />
            </form>
            <br /><br /><br /><br />
            </div>

        </div>
            
        </>
    )
}

export  default Customer;