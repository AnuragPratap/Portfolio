import React from 'react'
import './Works.css'
import Geekforgeeks from "../../img/g4g.png";
import Codecheff from "../../img/codecheff.png";
import Hackerrank from "../../img/hacker.png";
import Leetcode from "../../img/leet.png";
import Codingninja from "../../img/codingninja.png";
import { themeContext } from "../../Context";
import { useContext } from "react";
import { Link } from "react-scroll";
const Works = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
   <div className="works">
     <div className="awesome">
            <span style={ {color: darkMode ? 'white' : ''}}>Learning on All these</span>
            <span>Websites and Platforms</span>
            <span>
                I am learning and practicing  
                on these Websites and Platforms,
                <br />
                these websites and platforms helps me a lot 
                to enhance and 
                <br />
                improve my problem solving skills.
                <br />
                you can check my profiles of these websites by 
                <br />
                clicking on the icons. 

            </span>
            
            <Link spy={true} to="Contact" smooth={true}>
            <button className="button s-button"> Hire me </button>
            </Link>
            
        

        <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>
           

           {/* right side */}


        <div className="w-right">
            <div className="w-mainCircle">
                <a href="https://auth.geeksforgeeks.org/user/anurag12pundhir" target="_main" ><div className="w-secCircle">
                    <img src={Geekforgeeks} alt="" />
                </div></a>
                
                <a href="https://www.codechef.com/users/pundhir_anurag" target="_main">
                <div className="w-secCircle">
                    <img src={Codecheff} alt="" />
                </div>

                </a>
               

                <a href="https://www.codingninjas.com/codestudio/profile/AP_pundhir" target="_main">
                <div className="w-secCircle">
                    <img src={Codingninja} alt="" />
                </div>

                </a>
               


                <a href="https://leetcode.com/Anurag_pratap_pundhir/" target="_main">
                <div className="w-secCircle">
                    <img src={Leetcode} alt="" />
                </div>
                </a>
                

                <a href="https://www.hackerrank.com/appundhir01" target="_main">
                <div className="w-secCircle">
                    <img src={Hackerrank} alt="" />
                </div>
                </a>
                
            </div>
            {/* background Circle */}

            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>



        </div>


   </div>
  )
}

export default Works