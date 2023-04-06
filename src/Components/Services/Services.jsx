import React from 'react'
import './Services.css'
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './ANURAG_PRATAP_PUNDHIR.pdf'
import { themeContext } from "../../Context";
import { useContext } from "react";


const Services = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="services" id='Services'>
        {/* left side of services */}
        <div className="awesome">
            <span style={ {color: darkMode ? 'white' : ''}}>My Tech</span>
            <span>Stacks</span>
            <span>
                My proficiency includes C++ Competitive Programming along with  
                <br />
                MERM STACK development.
                <br />
                You can know more about me by downloading my CV.
            </span>
            <a href={Resume} download >
            <button className="button s-button"> Download CV </button>
            </a>

        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
       

        {/* right side of the services*/}


        <div className="cards">

          {/* first card*/}

          <div style={{left:'14rem'}}>
            <Card
              emoji={HeartEmoji}
              heading={'IDE'}
              detail={"Visual Studio, IntelliJ IDEA, Sublime."}
            />
          </div>

          {/* second card */}

            <div style={{top:'12rem', left:'-4rem'}}>

              <Card 
              emoji={Glasses}
              heading={"Developer"}
              detail={"Html, Css, JavaScript, React, Express, MySQL, React.js, Node.js, Bootstrap."}
              />
            </div>

              {/* third card */}

              <div style={{top:"19rem", left:"12rem"}}>
                <Card
                emoji={Humble}
                heading={"UI/UX Designer"}
                detail={"Passionate about creating beautiful user friendly Interface."}
                />
              </div>
              <div className="blur s-blur2" style={{background:"var(--purple)"}}></div>

        </div>
    </div>
  )
}

export default Services