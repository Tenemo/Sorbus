import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.scss';
import axios from 'axios';

const fetch = () => {
    axios
        .post(
            'http://checkurl.phishtank.com/checkurl',
            {
                url: 'https://www.example.org/',
                format: 'json',
            },
            // {
            //     headers: {
            //         'Content-Type': 'application/x-www-form-urlencoded',
            //     },
            // },
        )
        .then(response => console.log(JSON.stringify(response)))
        .catch(error => console.log(error));
};
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
            {/* eslint-disable-next-line */}
            <button onClick={fetch}>FETCH</button>
        </nav>
    </header>
);

export default Header;
