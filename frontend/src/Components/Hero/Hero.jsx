import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
// import hero_image from './Components/Assets/hero_image.png'



const Hero = () => {
  return (
    <div className="hero">
        {/* <img src={hero_image} alt="hero_image" /> */}
        <div className="hero-text">
            <h2>ISH</h2>
            <div>
                <p>Conferencia de seguridad</p>
                
                <p>25/03  19:00</p>    
            </div>
        </div>
        <div className="hero-latest-btn">
                <div>Quiero saber más</div>
                <FontAwesomeIcon icon={faArrowRight} size="2xl" />
        </div>
        
    </div>
  )
}

export default Hero