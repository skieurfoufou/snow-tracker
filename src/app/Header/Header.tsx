import React from "react";
import logo from "./logo.svg";
import classes from "./Header.module.css";
import NavItem from "./NavItem/NavItem";

function Header() {
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <img src={logo} className={classes.appLogo} alt="logo" height="40px" />
        <h3>SNOW FORECAST AND SNOW CONDITION TRACKER</h3>
        <img src={logo} className={classes.appLogo} alt="logo" height="40px" />
      </div>
      <div className={classes.login}>
        <NavItem route={{ link: "/forecast", title: "Forecast" }} />
        <NavItem route={{ link: "/snow-condition", title: "Snow" }} />
        <NavItem route={{ link: "/about", title: "About" }} />
      </div>
    </div>
  );
}

export default Header;
