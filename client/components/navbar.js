import React from 'react';
import { IndexLink, Link } from 'react-router';

const NavBar = () => {

    var sign = (!Meteor.user()) ? 'Sign In' : 'Sign Out';

    return (
      <div>
        <header className="navbar navbar-slim navbar-fixed-top">
            <div className="container">
                <div className="row">
                  <div className="col-sm-4">
                    <Link className="mobileMenu desktopOff" to="#">Menu</Link>
                    <Link to="/" className="logo">dunnhumby</Link>
                  </div>
                  <nav className="col-sm-8 hidden-xs">
                    <ul className="nav right">
                      <li><Link className="" activeClassName="active" to="/help">Help</Link></li>
                      <li><Link className="" activeClassName="active" to="/settings">Settings</Link></li>
                      <li><Link className="" activeClassName="active" to="/login">{sign}</Link></li>
                    </ul>
                  </nav>
                </div>
            </div>
        </header>
        <div className="lowerNavContainer">
          <div className="container">
            <ul className="lowerNav">
              <li><IndexLink className="sheetSelector" activeClassName="active" to="/">Top Stories</IndexLink></li>
              <li><Link className="sheetSelector" activeClassName="active" to="storydetail">Story Detail</Link></li>
            </ul>
          </div>
          </div>
      </div>
    );
};

export default NavBar;
