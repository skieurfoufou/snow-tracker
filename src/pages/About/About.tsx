import React from "react";
import styles from "./About.module.css";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

function About() {
  return (
    <div className={styles.container}>
      <h1>About</h1>
      <h2>Benichou Mordehai</h2>
      <h3>Front-End Developer</h3>
      <h4>Mail: skieurfou@hotmail.com, skieurfou@gmail.com</h4>
      <p>
        Snow Tracker is a single page react application,with Typescript witch
        utilize an API to fetch the data and a router to navigate between
        differents pages
      </p>
      <div className={styles.socialNetwork}>
        <ul className={styles.ul}>
          <li className={styles.li}>
            <a
              href="https://www.linkedin.com/in/mordehai-benichou-8bb306238/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
            >
              Linkedin
              <i className={styles.i}>
                <FaLinkedin />
              </i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/skieurfoufou"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.a}
            >
              Github
              <i className={styles.i}>
                <FaGithub />
              </i>
            </a>
          </li>
        </ul>
      </div>
      <br />
      <br />
      <h4>Benichou Mordehai - January 2023</h4>
    </div>
  );
}

export default About;
