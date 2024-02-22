import React from 'react'
import './Hero.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'



const Hero = () => {
  return (
    <div className="hero">
        <div className="hero-left">
            <h2>NEW ROBOTS</h2>
            <div>
                <div className="hand-hand-icon">
                    <p>New</p>
                    <FontAwesomeIcon className='hand-icon' icon={faHand} size="xl" />
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
                <p>Lorem ipsum dolor sit amet.</p>
            </div>

            <div className="hero-latest-btn">
                <div>Latest</div>
                <FontAwesomeIcon icon={faArrowRight} size="2xl" />
            </div>
        </div>
        
        <div className="hero-right">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjxzGYCfUOyRzgfjuQK9-6NebtxTd2wCSPpPkIRhdxZOc-ONXmU8AMkbEwSETjP9xOvyY&usqp=CAU" alt="" />
        </div>
    </div>
  )
}

export default Hero