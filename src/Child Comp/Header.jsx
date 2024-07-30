import React from 'react'
import BitmapLogo from '../assets/Logo/Bitmaplogo.png'
import 'bootstrap-icons/font/bootstrap-icons.css';
import '../Stylesheets/Header.css'

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="headerCont ">
                <div className="headerlogo ">
                    <img src={BitmapLogo} className='img-responsive' alt="BitmapLogo" />
                </div>
                <div className="headerNav ">
                    <ul>
                        <li><a href="#Services">Services</a></li>
                        <li><a href="#AboutUs">About Us</a></li>
                        <li><a href="#Blogs">Blogs</a></li>
                        <li><a href="#">Case Studies</a></li>
                    </ul>
                </div>
                <div className="contact-us-btn ">
                    <a href="#Contact-us"><span id='contact-us'>CONTACT US</span></a>
                </div>
                <div className="menu-icon ">
                    <i class="bi bi-list"></i>
                </div>
            </div>
        </div>
    )
}

export default Header
