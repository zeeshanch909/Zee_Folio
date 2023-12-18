import React from "react";
import "./Menus.css";
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import { FcHome, FcBiotech, FcReading } from "react-icons/fc";
import { DiJoomla } from "react-icons/di";
import { SiWorkplace } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";

const Menus = ({ toggle }) => {
  return (
    <>
      {toggle ? (
        <>
        <Zoom>
          <div className="navbar-profile-pic">
            <img src="zeeshy.jpg" alt="Profile Picture" />
          </div>
        </Zoom>
           <Fade left>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                  <FcHome />
                  Home
                </Link >
              </div>

              <div className="nav-link">
                <Link to="about"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <DiJoomla />
                 About
                </Link>
              </div>

              <div className="nav-link">
                <Link
                to="education"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                > 
                <FcReading />
                Education
                </Link>
              </div>

              <div className="nav-link">
                <Link to="techstack"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <FcBiotech />
                Tech Stack
                </Link>
              </div>

              <div className="nav-link">
                <Link to="projects"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <GoProjectSymlink />
                Projects
                </Link>
              </div>
              <div className="nav-link">
                <Link to="experience"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <SiWorkplace />
                Work Experience
                </Link>
              </div>
              <div className="nav-link">
                <Link to="contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                >
                <IoMdContacts />
                Contact
                </Link>
              </div>
            </div>
          </div>
          </Fade>
        </>
      ) : (
        <>
          <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <FcHome title="Home" />
              </div>
              <div className="nav-link">
                <DiJoomla title="About" />{" "}
              </div>
              <div className="nav-link">
                <FcReading title="Qualification" />
              </div>
              <div className="nav-link">
                <FcBiotech title="Tech Stack" />{" "}
              </div>
              <div className="nav-link">
                <GoProjectSymlink title="Projects" />
              </div>
              <div className="nav-link">
                <SiWorkplace title="Experience" />
              </div>
              <div className="nav-link">
                <IoMdContacts title="Contact" />
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Menus;
