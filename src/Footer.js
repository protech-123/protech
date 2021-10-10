import React from 'react'
import logo from './img/logo-2.png'

export const Footer = () => {
    return (
        <>
        <div className="footer">
            <div className="logo">
                <img src={logo} alt="logo"/>
            </div>

            <div className="imp-links">
                <h1 className="foot-head">Important Links</h1>
                <ul>
                    <li><a href="./Hireatechnician">Hire a Technician</a></li>
                    <li><a href="/Findwork">Find Work</a></li>
                    <li><a href="#How-to">How it works</a></li>
                    <li><a href="./Home">Privacy policy</a></li>
                </ul>

            </div>

            <div className="company">
            <h1 className="foot-head">Company</h1>
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="./Home">Careers</a></li>
                    <li><a href="./Home">Customer service</a></li>
                    <li><a href="./Home">Contact us</a></li>
                </ul>

            </div>
        </div>
            
        </>
    )
}

export default Footer;
