import React from "react";
import classes from "./Footer.module.css";
import { Link } from "react-router-dom";
import home from "./home_icon.svg";
import about from "./about_icon.svg";
import { BsSnow3 } from "react-icons/bs";
import { TiWeatherCloudy } from "react-icons/ti";

function Footer() {
  return (
    <div className={classes.container}>
      <div className={classes.iconsLeft}>
        <Link to="/">
          <img src={home} className={classes.logo} alt="home" height="40px" />
        </Link>
      </div>
      <div className={classes.iconsCenter}>
        {/* <div className={classes.cube}></div>
        <div className={classes.cube2}>
          <Link to={"/create-list"}>
            <img
              src={add}
              className={classes.addLogo}
              alt="add"
              height="40px"
            />
          </Link>
        </div> */}
        <Link to="/snow-condition">
          <BsSnow3 className={classes.logo} />
        </Link>
        <Link to="/forecast">
          <TiWeatherCloudy className={classes.logo} />
        </Link>
      </div>
      <div className={classes.iconsRight}>
        <Link to="/about">
          <img src={about} className={classes.logo} alt="about" height="40px" />
        </Link>
      </div>
    </div>
  );
}

export default Footer;
