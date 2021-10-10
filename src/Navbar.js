import React from 'react'
import './App.css';
import logo from './img/logo-2.png'


export const Navbar = () => {
    return (
        <div className="Nav">
            <a href="/"> <div className="left"> <img src={logo} alt="logo" /></div></a>
            <div className="right">
                <a href="./Hireatechnician"><button className="btn hat">Hire a technician</button></a>
                <a href="./Findwork"> <button className="btn fw">Find work</button></a>
                <a href="./Customer"> <button className="btn cl">Customer Login</button></a>
            
            </div>
        </div>
    )
}
