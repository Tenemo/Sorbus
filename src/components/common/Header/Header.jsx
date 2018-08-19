import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';

export class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <nav className="navbar">
                    <li className="nav-item">
                        <NavLink
                            exact
                            to="/"
                            className="nav-link"
                        >
                            Home
                        </NavLink>
                    </li>
                </nav>
            </div>
        );
    }
}

export default Header;