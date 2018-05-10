import React from 'react';
import {NavLink} from 'react-router-dom';

const Navbar = () => {

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-well">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">Expensify</NavLink>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                                   data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Expense Categories
                                </a>
                                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <NavLink className="dropdown-item" to="#">Travel Expenses (Gas, Lodging, Travel Dining, etc...)</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="#">Food Expenses (Groceries for home, Lunch, Charity, etc...)</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="#">Home (Repairs, Utilities, Landscape, etc...)</NavLink>
                                    <div className="dropdown-divider"></div>
                                    <NavLink className="dropdown-item" to="#">Auto (Repairs, Service Checkups, Insurance, etc...)</NavLink>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/expense/new" activeClassName="active" className="nav-link">
                                    <i className="ion-plus-circled"></i><span> Add Expense</span>
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/team" activeClassName="active" className="nav-link">Meet the Team</NavLink>
                            </li>
                        </ul>
                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="search" placeholder="Search Expenses..." aria-label="Search"/>
                            <button className="btn btn-outline-dark my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        )
}
export default Navbar;