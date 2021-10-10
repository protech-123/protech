import React from 'react'
import about from './img/about.png'
import './App.css'


export const About = () => {
    return (
        <>
            <div className="about" id="about">
                <h1>About us</h1>
                <div className="flex-box-7">
                    
                    <div className="head-ing">
                    
                
                    <h2>Protech is a platform which connects customers who are looking
                        to get their devices fixed, to the best Technicians around them.
                        Customers can either look upto the profiles of our technicans 
                        or they can use our location service which allows them to search
                        for best repair shops in their area.
                    </h2>

                  
                    <h2>Technicians on the other hand can find their first or next client through 
                        protech. Protech allows Technicians to find their potential customers </h2>
                   
                       </div>
                       <div className="image-4">
                            <img src={about} alt="about"/>
                        </div>
                        </div>
                      
                </div>
           
        </>
    )
}


export default About;