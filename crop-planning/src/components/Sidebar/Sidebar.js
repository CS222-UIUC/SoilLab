import React, {useState} from 'react'
import { FaBars } from "react-icons/fa";
import { FaWindowClose } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData'
import './Sidebar.css';
import { IconContext } from 'react-icons';

function Sidebar() {
    const [side, setSidebar] = useState(false)
    const showSidebar = () => setSidebar(!side)

    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <div className='sidebar'>
                <Link to="#" className='menu-bars'>
                    <FaBars onClick={showSidebar}/>
                </Link>
            </div>
            <nav className={side ? 'side-menu active' : 'side-menu'}>
                <ul className='side-menu-items' onClick={showSidebar}>
                   <li className='sidebar-toggle'>
                        <Link to="" className='menu-bars'>
                            <FaWindowClose/>
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={(item.url)}>
                                    {/* {item.icon} */}
                                    <span>{item.title}</span>
                                </Link>
                            </li>   
                        );
                    })}
                </ul>
            </nav>
        </IconContext.Provider>
        </>
        
    );
}

export default Sidebar;