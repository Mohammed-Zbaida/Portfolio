import React from 'react';
import { Link } from 'react-scroll';
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="/" className="logo-text">
              Mohammed Zbaida
            </a>
          </div>
          <ul className="navbar-menu">
            <li>
            <a className="navbar-item" href="">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                ABOUT
              </Link>
            </a>
            </li>
            <li>
            <a className="navbar-item" href="">
              <Link
                activeClass="active"
                to="education"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                EDUCATION
              </Link>
            </a>
            </li>
            <li>
            <a className="navbar-item" href="">
              <Link
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                SKILLS
              </Link>
              </a>
            </li>
            <li>
            <a className="navbar-item" href="">
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                PROJECTS
              </Link>
            </a>
            </li>
            <li>
            <a className="navbar-item" href="">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                CONTACT
              </Link>
            </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;



