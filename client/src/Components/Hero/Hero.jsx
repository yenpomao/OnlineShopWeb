import React from 'react'
import './Hero.css'
import hand from '../Assets/hand.png'
import hero_model from '../Assets/hero_model.jpg'
import arrow from '../Assets/arrow.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEEW ARRIVALS ONLY</h2>
            <div>
                <div className='hero-hand-icon'>
                    <p>new</p>
                    <img src={hand} alt=''></img>
                </div>
                <p>collection</p>
                <p>for everyone</p>
            </div>
            <div className='hero-latest-btn'>
                <div>Latest Collection</div>
                <img src={arrow} alt=''></img>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_model} alt=''></img>
        </div>
    </div>
  )
}

export default Hero