import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router';

class NavBar extends Component {

  constructor(props) {
    super(props);
  }

render() {

    var sign = (!Meteor.user()) ? 'Sign In' : 'Sign Out';
    
    return (
      <div>
        <header className="navbar navbar-slim navbar-fixed-top">
            <div className="container">
                <div className="row">
                  <div className="col-sm-6">
                    <Link className="mobileMenu desktopOff" to="#">Menu</Link>
                    <Link to="/" className="logo">dunnhumby</Link>
                    <img className="moduleIcon" src="./images/RIIcon.png" />
                    <div className="moduleHeader">
                      <h1 className="moduleHeaderText">{this.props.moduleName}</h1>
                    </div>
                  </div>
                  <nav className="col-sm-6 hidden-xs">
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
}
};

export default NavBar;
