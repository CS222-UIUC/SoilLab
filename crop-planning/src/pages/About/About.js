import React from "react";
import './About.css'
import imgout from '../../assets/plant-hand.png'

function About() {
    return (
        <>
        <div className="About">
            {/* <Navbar /> */}
        </div>
        <div className = "maindiv">
            <div className="outer">
                <img src={imgout} alt=""
                width = "300"
                height="300"/>
            </div>
        </div>

        <div className="title">
            <p style={{fontStyle: "oblique", color: "#0C486B"}}> 
            We are SoilLab! <br/>
            <br/>
            SoilLab is a crop-planning application built to help you with your agricultural needs. <br/>
            All you have to do
            is give us a little information about your farm, and we'll help you plan out the layout of your crops for every season. </p>
            <br/>
            <br/>
            <p style={{ color: "#0C486B"}}> 
            Contact us at soil.lab.app@gmail.com! </p>
        </div>

        </>
    )
}
export default About;
