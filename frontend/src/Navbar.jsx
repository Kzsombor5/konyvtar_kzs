import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
            <li className="navbar-item">
                    <Link to="/" className="navbar-link">Kezdőoldal</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/konyvtar" className="navbar-link">Könyvek listázása</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/ujkonyv" className="navbar-link">Új könyv hozzáadása</Link>
                </li>
                <li className="navbar-item">
                    <Link to="/konyvtorles" className="navbar-link">Könyv törlése</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;