import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink to="/careers" activeClassName="active" className="nav-link">Careers</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/contact" activeClassName="active" className="nav-link">Contact Us</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/about" activeClassName="active" className="nav-link">About Us</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;