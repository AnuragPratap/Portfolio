import React from 'react'
import './Footer.css'
import Wave from "../../img/wave.png";
import Insta from '@iconscout/react-unicons/icons/uil-instagram'
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin'
import Github from '@iconscout/react-unicons/icons/uil-github'
const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} alt="" style={{width: '100%'}} />
        <div className="f-content">
            <span>appundhir01@gmail.com</span>
            <div className="f-icons">
                
                <a href="https://www.instagram.com/pundhir.anurag/?next=%2F" target='_main'><Insta color='white' size='3rem' /></a>
                <a href="https://www.linkedin.com/in/anurag-pratap-pundhir/" target='_main'><Linkedin color='white' size='3rem' /></a>
                <a href="https://github.com/AnuragPratap" target='_main'><Github color='white' size='3rem' /></a>
            </div>
        </div>
    </div>
  )
}

export default Footer