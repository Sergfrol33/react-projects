import React from "react";
import {NavLink} from "react-router-dom";
import './asidenav.css'
const AsideNavbar = () => {

    return (
        <aside className="side-nav">
            <div className="side-nav__row">
                <ul className='side-nav__list'>
                    <li className='side-nav__list-item'><NavLink to ='/buttons'>buttons</NavLink></li>
                    <li  className='side-nav__list-item'><NavLink to ='/weather'>weather</NavLink></li>
                </ul>
            </div>
        </aside>
    );
}

export default AsideNavbar;