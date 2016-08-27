import React from 'react';
import { Link } from 'react-router';

const NavBar = () => {
    return (
        <header className="navbar navbar-fixed-top">
            <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <Link className="mobileMenu desktopOff" to="#">Menu</Link>
                    <Link to="/" className="logo">dunnhumby</Link>
                  </div>
                  <nav className="col-sm-8 hidden-xs">
                    <ul className="headerSubNav right">
                    </ul>
                    <ul className="nav right">
                      {/*<li><Link className="" activeClassName="active" to="/help">?</Link></li>
                      <li><Link className="" activeClassName="active" to="/calculator">Pricing Calculator</Link></li>
                      <li><Link className="" activeClassName="active" to="/stores">Stores</Link></li>
                      <li><Link className="" activeClassName="active" to="/campaigns">Campaigns</Link></li>
                      <li><Link className="" activeClassName="active" to="/planner">Planner</Link></li>*/}
                    </ul>
                  </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
