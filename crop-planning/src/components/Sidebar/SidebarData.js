import React from 'react'
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
//mport * as IoIcons from 'react-icons/io';
//import * as FaIcons from 'react-icons/fa';

export const SidebarData = [
    {
        title: "Analyze",
        url:"/suggestionBoard",
        //icon: <FaIcons.FaCartPlus />
        cName: 'side-links'
    }, {
        title: "Grid",
        url: '/grid',
        cName: 'side-links'
    }, {
        title: "Form",
        url: '/form',
        cName: 'side-links'
    }, {
        title: "Dropdown",
        url: '/dropdown',
        cName: 'side-links'
    }
]