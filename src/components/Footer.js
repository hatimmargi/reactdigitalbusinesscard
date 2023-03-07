import React from "react";
import twitter_icon from '../svg/twitter.svg' 
import facebook_icon from '../svg/facebook.svg' 
import instagram_icon from '../svg/instagram.svg' 
import github_icon from '../svg/github.svg' 
export default function Footer () {
    return (
        <footer className="footer">
            <ul>
                <li><a href="#" target="_blank"><img src={twitter_icon} alt=""/></a></li>
                <li><a href="#" target="_blank"><img src={facebook_icon} alt=""/></a></li>
                <li><a href="#" target="_blank"><img src={instagram_icon} alt=""/></a></li>
                <li><a href="#" target="_blank"><img src={github_icon} alt=""/></a></li>
            </ul>
        </footer>
    )
}