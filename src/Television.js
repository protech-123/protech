import React from 'react'
import Profile from './Profile'
import man from './img/seth.jpg'
import Footer from './Footer'

export const Television = () => {
    return (
        <>

            <div className="profiles">
                <Profile
                    profile={man}
                    name="Roger Fedrer"
                    age=" Age - 40"
                    speciality="Television Repairer"
                    experience="Experience = 10 yrs+"
                    charges="Rs. 2000 per hr"
                    address="Address: Geneva"
                    vaccinated="Vaccination:Done"

                />

                <Profile
                    profile={man}
                    name="Margret Thatcher"
                    age=" Age - 55"
                    speciality="Software Developer"
                    experience="Experience = 25 yrs+"
                    charges="Rs. 5000 per hr"
                    address="Address: London"
                    vaccinated="Vaccination:Done"

                />



                <Profile
                    profile={man}
                    name="Margret Thatcher"
                    age=" Age - 55"
                    speciality="Software Developer"
                    experience="Experience = 25 yrs+"
                    charges="Rs. 5000 per hr"
                    address="Address: London"
                    vaccinated="Vaccination:Done"

                />


                <Profile
                    profile={man}
                    name="Margret Thatcher"
                    age=" Age - 55"
                    speciality="Software Developer"
                    experience="Experience = 25 yrs+"
                    charges="Rs. 5000 per hr"
                    address="Address: London"
                    vaccinated="Vaccination:Done"

                />
                
                <Profile
                    profile={man}
                    name="Margret Thatcher"
                    age=" Age - 55"
                    speciality="Software Developer"
                    experience="Experience = 25 yrs+"
                    charges="Rs. 5000 per hr"
                    address="Address: London"
                    vaccinated="Vaccination:Done"

                />
                
                <Profile
                    profile={man}
                    name="Margret Thatcher"
                    age=" Age - 55"
                    speciality="Software Developer"
                    experience="Experience = 25 yrs+"
                    charges="Rs. 5000 per hr"
                    address="Address: London"
                    vaccinated="Vaccination:Done"

                />
            </div>

            <br /><br /><br /><br /><br />

            <Footer/>


        </>
    )
}

export default Television;