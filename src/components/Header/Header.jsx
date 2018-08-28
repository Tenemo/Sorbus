import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

const Header = () => (
    <header>
        <nav className="navbar">
            <li className="nav-item">
                <NavLink exact to="/checklist" className="nav-link">
                    Checklist
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink exact to="/editor" className="nav-link">
                    Editor
                </NavLink>
            </li>
        </nav>
    </header>
);

export default Header;
