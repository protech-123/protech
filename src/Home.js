import React from 'react'
import About from './About';
import './App.css';
import Common from './Common';
import Footer from './Footer';
import Service from './Service';

export const Home = () => {
    return (
        <div>
            <div className="title">
                <br />
                 <h1>Protech</h1>
                <h3>One place for you to get your devices fixed</h3>

               <a href="#How-to"><button className="usage">How it Works</button></a>
    
               <a href="#about">< button className="queries">Queries</button></a>

               <br /><br /><br /><br /> <br /><br /><br /><br />

                <Common/>

<About/>
<Service/>

<Footer/>
            </div>

         
            

            
        
        </div>
    )
}
