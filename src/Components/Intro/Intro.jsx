import React from "react";
import "./Intro.css";
import Github from "../../img/github.png";
import LinkedIn from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import crown from "../../img/crown.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import glassesimoji from "../../img/glassesimoji.png";
import { FloatingDiv } from "../FloatingDiv/FloatingDiv";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";
 

const Intro = () => {
  
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="intro">

      {/* left side from here */}

      <div className="i-left">
        <div className="i-name">
          <span style={{color : darkMode ? 'white' : ''}}>Hy! I am</span>

          <span>Anurag Pratap Pundhir</span>

          <span>
           I am a fresher pursuing B.TECH in Computer Science and Engineering from Aligarh College of Engineering and Technology. I am a standard driven person who always takes responsibility of my own actions. I am proficient MERN Stack Technology along with that I have a good hand in Competitive Programming using C++. I am a fast learner and always ready to have new experiences and learn new things. My resume includes a primary project named as Library Management System. My interest in creativity and discovering new stuff drove me towards Front End Developer.
          </span>
        </div>
        <Link spy={true} to="Contact" smooth={true}>
        <button className="button i-button">Hire me</button>
            </Link>


        <div className="i-icons">
          <a href="https://github.com/AnuragPratap" target="_main">
            <img src={Github} alt="Github" />
          </a>
          <a
            href="https://www.linkedin.com/in/anurag-pratap-pundhir/"
            target="_main"
          >
            <img src={LinkedIn} alt="LinkedIn" />
          </a>
          <a href="https://www.instagram.com/pundhir.anurag/" target="_main">
            <img src={Instagram} alt="Instagram" />
          </a>
        </div>
      </div>


      {/* Right side from here */}


      <div className="i-right">
        <img src={Vector1} alt="" />
        <img src={Vector2} alt="" />
        <img src={boy} alt="" />
        <img  src={glassesimoji} alt="" />

        <div style={{top:'-4%', left:'68%'}} className='floating-div'>
          <FloatingDiv image={crown} txt1='C++'/>
        </div>
        <div style={{top:'18rem' ,left:'1rem'}} className='floating-div'>
          <FloatingDiv image={thumbup} txt1='Web' txt2='Developer'/>
        </div>
        <div className="blur" style={{background:"rgb(238 210 255)"}}></div>
        <div className="blur" style={{background:'#c1f5ff', top:'17rem', width:'21rem', height:'11rem',left:'-9rem'}}></div>

      </div>
    </div>
  );
};

export default Intro;
