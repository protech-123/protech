import React from 'react'


export const Profile = (props) => {
    return (
        <>

            <div className="main-profile">



                <div className="profiles">
                    <div className="profile">
                        <div className="profile-img">
                            <img src={props.profile} alt="profiles" />
                        </div>
                        <div className="about-tech">
                            <p>{props.name}</p>
                            <p>{props.age}</p>
                            <p>{props.experience}</p>
                            <p>{props.charges}</p>
                            <p>{props.speciality}</p>
                            <p>{props.address}</p>
                            <p>{props.vaccinated}</p>
                        </div>
                    </div>
                </div>

            </div>

            <br /><br /><br /><br /><br />
        </>
    )
}

export default Profile
