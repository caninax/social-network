import React from "react";
import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

export const Navbar = () => {
    const {item, itemLink, active} = classes;
    const activeLink =  `${itemLink} ${active}`;
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={item}><NavLink activeClassName={itemLink}  to="/profile">Profile</NavLink></li>
                <li className={item}><NavLink activeClassName={itemLink}  to="/dialogs">Messages</NavLink></li>
                <li className={item}><NavLink activeClassName={itemLink}  to="">News</NavLink></li>
                <li className={item}><NavLink activeClassName={itemLink}  to="">Music</NavLink></li>
                <li className={item}><NavLink activeClassName={itemLink}  to="">Settings</NavLink></li>
            </ul>
        </nav>
    )
};
