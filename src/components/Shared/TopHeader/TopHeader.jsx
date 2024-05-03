import React from 'react';
import './index.css';
import { FaFacebookSquare, FaInstagramSquare, FaLinkedin, FaGithubSquare, FaPhoneAlt, FaEnvelope  } from "react-icons/fa";

const TopHeader = () => {
    return (
        <div id="topbar" className="d-flex align-items-center fixed-top">
            <div className="container d-flex justify-content-between">
                <div className="contact-info d-flex align-items-center">
                    <FaEnvelope className='contact-icon'/> <a href="mailto:sandeepreddykanaganti1999@gmail.com.com">sandeepreddykanaganti1999@gmail.com</a>
                    <FaPhoneAlt className='contact-icon'/> <a href="tel:+91 8297542144">+91 8297542144</a> 
                </div>
                <div className="d-none d-lg-flex social-links align-items-center">
                    <a href="https://www.linkedin.com/in/sandeep-kanaganti-837001160/" target='_blank' rel="noreferrer" className="linkedin"><FaLinkedin /></a>
    
                    <a href="https://github.com/getright4" target='_blank' rel="noreferrer" className=""><FaGithubSquare /></a>
                </div>
            </div>
        </div>
    );
};
export default TopHeader;