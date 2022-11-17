import React from "react";
// import Navbar from  "./components/Navbar/Navbar"
import './Home.css'
import imgout from './assets/plant-hand.jpg'
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
        <h2 className="text-2xl md:text-4xl lg:text-6xl uppercase">Welcome to</h2>
		<h1 className="text-3xl md:text-6xl lg:text-8xl uppercase font-black mb-8">SoilLab</h1>
        <p className="text-base md:text-lg lg:text-2xl mb-8">Get help with your crop planning!</p>
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