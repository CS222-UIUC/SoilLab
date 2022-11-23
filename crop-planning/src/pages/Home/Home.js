import React from "react";
// import Navbar from  "./components/Navbar/Navbar"
import './Home.css'
import imgout from '../../assets/plant-hand.png'
//import { Link } from "react-router-dom";
//import imgin from './assest/Asset 2.png'
//  <!--<button><Link to="/register">Login</Link></button>-->



function Home() {
    return (
        <>
        <div className="Home">
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
		<h1>SoilLab</h1>
        <p> Get help with your crop planning!</p>
        </div>

        {/* <ul>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/dashboard">Dashboard</a></li>
        </ul> */}
        </>
    )
}

export default Home;