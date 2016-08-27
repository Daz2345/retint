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
                      <li><Link className="" activeClassName="active" to="/help">Help</Link></li>
                      <li><Link className="" activeClassName="active" to="/settings">Settings</Link></li>
                      <li><Link className="" activeClassName="active" to="/login">Sign Out</Link></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </header>
    );
};

export default NavBar;
