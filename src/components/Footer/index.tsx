import "./footer.css";
import React from "react";
import { Link } from "react-router-dom";
import { GithubIcon, LinkedinIcon, TwitterIcon } from "assets/icons";

export function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <span>
        Made with <i className="fa-solid fa-heart"></i> and
        <strong className="strong-text"> CSS</strong> by Vineet
      </span>
      <div className="footer-links">
        <Link to="https://github.com/vrx29/">
          <GithubIcon />
        </Link>
        <Link to="https://twitter.com/vrx29">
          <TwitterIcon />
        </Link>
        <Link to="https://www.linkedin.com/in/vrx29">
          <LinkedinIcon />
        </Link>
      </div>
    </footer>
  );
}
