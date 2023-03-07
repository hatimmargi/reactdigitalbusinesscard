import React from "react";
import email_icon from '../svg/email.svg'
import linkedin_icon from '../svg/linkedin.svg'
import profile_pic from '../imgs/profile_pic.png'
export default function Info () {
    return (
        <div className="info-section">
            <img className="profile-pic" src={profile_pic} alt=""/>
            <h3>Laura Smith</h3>
            <p>Frontend Developer</p>
            <small>laurasmith.website</small>
            <div className="info-btns">
                <a className="email-btn" href="" target={"_blank"}><img src={email_icon}/>Email</a>
                <a className="linkedin-btn" href="" target={"_blank"}><img src={linkedin_icon}/>LinkedIn</a>
            </div>
        </div>
    )
}