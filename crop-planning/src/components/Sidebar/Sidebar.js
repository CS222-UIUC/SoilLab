// import React, {useState} from 'react'
// import { FaBars } from "react-icons/fa";
//import { FaWindowClose } from "react-icons/fa";
// import { Link } from 'react-router-dom'
// import { SidebarData } from './SidebarData'
// import './Sidebar.css';
// import { IconContext } from 'react-icons';

// function Sidebar() {
//     const [sidemenu, setSidebar] = useState(false);
//     const showSidebar = () => {setSidebar(!sidemenu)};

//     return (
//         <>
//         <IconContext.Provider value={{color: '#fff'}}>
//             <div className='sidebar'>
//                 <Link to="#" className='menu-bars'>
//                     <FaBars onClick={showSidebar}/>
//                 </Link>
//             </div>
//             <nav className={sidemenu ? 'side-menu active' : 'side-menu'}>
//                 <ul className='side-menu-items' onClick={showSidebar}>
//                    <li className='sidebar-toggle'>
//                         <Link to="#" className='menu-bars'>
//                             <FaWindowClose/>
//                         </Link>
//                     </li>
//                     {SidebarData.map((item, index) => {
//                         return (
//                             <li key={index} className={item.cName}>
//                                 <Link to={(item.url)}>
//                                     {/* {item.icon} */}
//                                     <span>{item.title}</span>
//                                 </Link>
//                             </li>   
//                         );
//                     })}
//                 </ul>
//             </nav>
//         </IconContext.Provider>
//         </>
        
//     );
// }

// export default Sidebar;


import SideNav, {Toggle, NavItem, NavIcon, NavText} from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { useNavigate } from "react-router-dom";
import './Sidebar.css';
import { AiFillHome } from "react-icons/ai";
import { SiSimpleanalytics } from "react-icons/si";
import { IoIosGrid } from "react-icons/io";
import { FaWpforms } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";




function Sidebar() {
    const navigate = useNavigate();

    
    return <SideNav
        onSelect={selected=> {
            console.log(selected)
            navigate('/' + selected)
        }} 
        className='sidebar'>
            <SideNav.Toggle />
            <SideNav.Nav defaultSelected="Home">
                <NavItem eventKey = "dropdown">
                    <NavIcon><GiFarmTractor/></NavIcon>
                    <NavText>Farm Info</NavText>
                </NavItem>
                <NavItem eventKey = "grid">
                    <NavIcon><IoIosGrid/></NavIcon>
                    <NavText>Grid</NavText>
                </NavItem>
                <NavItem eventKey = "suggestionBoard">
                    <NavIcon><SiSimpleanalytics/></NavIcon>
                    <NavText>Analyze</NavText>
                </NavItem>
                <NavItem eventKey = "form">
                    <NavIcon><FaWpforms/></NavIcon>
                    <NavText>Feedback</NavText>
                </NavItem>
            </SideNav.Nav>
        </SideNav>
        
    
}

export default Sidebar;

    // const showSidebar = () => {
    //     sidemenu === true ? setSidebar(false) : setSidebar(true);
    // }