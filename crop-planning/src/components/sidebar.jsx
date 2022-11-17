import React from "react";
import PropTypes from 'prop-types';
import {
    NavLink
} from "react-router-dom";

import {
    BiUserCircle,
    BiSearch
} from "react-icons/bi";

import {
    GiCorn
} from "react-icons/gi";

import {
    FaBars
} from "react-icons/fa";

const Sidebar = ({children}) => {
    const menuItem =[
        {
            path:"/accountDashboard",
            name: "Account",
            icon: <BiUserCircle/>
        }, {
            path:"/cropModelBoard",
            name: "Crops",
            icon: <GiCorn/>
        }, {
            path:"/suggestionBoard",
            name: "Analyze",
            icon: <BiSearch/>
        }, {
            path: '/grid',
            "name": "Grid",
            icon: <FaBars/>
        }, {
            path: '/form',
            "name": "Form",
            icon: <FaBars/>
        }

    ]
    return (
        <div className="container">
            <div className="sidebar App">
                <div className="top_section">
                    <h1 className="logo">Logo</h1>
                    <div className="bars">
                        <FaBars/>
                    </div>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', gap: '16px', alignItems: 'center'}}>
                {
                    menuItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className = "Link" activeclassname = "active">
                            <div className="icon"> {item.icon} </div>
                            <div className="link_text"> {item.name} </div>
                        </NavLink>
                    ))
                }
                </div>
                
            </div>
            <main> {children} </main>
        </div>
    );
};  

Sidebar.propTypes = {
    children: PropTypes.any,
    onClickOut: PropTypes.func,
};

export default Sidebar;