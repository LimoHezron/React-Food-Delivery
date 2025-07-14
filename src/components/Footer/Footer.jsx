import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Enjoy fast, reliable, and delicious meals delivered to your door. From everyday cravings to special moments, we bring you fresh flavors with love. Order now and let us handle the rest—quick, simple, and satisfying!</p>
                <div className='footer-social-icons'>
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2> 
                <ul>
                    <li>+000-7123-456-7789</li>
                    <li>info@tomato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer-copyright">Copyright 2025 © Tomato.com - All Right Reserved.</p>
    </div>
  )
}

export default Footer