import React from 'react'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'



export const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-links">
            <ul className="footer-links1">
                <li>Product</li>
                <li>Features</li>
                <li>Resources</li>
            </ul>
            <div>
                <h1>AgarTech</h1>
            </div>
            <ul className="footer-links2">
                <li>About</li>
                <li>Blog</li>
                <li>Support</li>
            </ul>
        </div>
        <hr />

        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <FontAwesomeIcon className='footer-icon' icon={faTwitter} size="2xl" />
            </div>

            <div className="footer-icons-container">
                <FontAwesomeIcon className='footer-icon' icon={faLinkedin} size="2xl" />
            </div>

            <div className="footer-icons-container">
                <FontAwesomeIcon className='footer-icon' icon={faFacebook} size="2xl" />
            </div>

            <div className="footer-icons-container">
                <FontAwesomeIcon className='footer-icon' icon={faInstagram} size="2xl" />
            </div>
        </div>
        <div className="footer-copyright">
                <p>© 2010 - 2020 Privacy - Terms</p>
                
            </div>

    </div>
  )
}
