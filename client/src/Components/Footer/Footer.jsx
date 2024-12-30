import React from 'react'
import './Footer.css'
import facebook_logo from '../Assets/facebook_logo.png'
import instagram_icon from '../Assets/instagram_icon.png'
import whatsapp_icon from '../Assets/whatsapp_logo.png'
import logo from '../Assets/logo.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='footer-logo'>
            <img src={logo} alt=''></img>
            <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={facebook_logo} alt=''></img>
            </div>
            <div className="footer-icons-container">
                <img src={instagram_icon} alt=''></img>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''></img>
            </div>
            <div className="footer-copyright">
                <hr></hr>
                <p>Copyright @2024 -All Right Reserved</p>
            </div>
        </div>
    </div>
  )
}

export default Footer