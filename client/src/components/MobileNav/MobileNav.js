import React from 'react'
import { useState } from 'react';
import "./MobileNav.css"
import { IoMenu } from "react-icons/io5";
import { FcHome, FcBiotech, FcReading } from "react-icons/fc";
import { DiJoomla } from "react-icons/di";
import { SiWorkplace } from "react-icons/si";
import { GoProjectSymlink } from "react-icons/go";
import { IoMdContacts } from "react-icons/io";
import { AiOutlineMenuUnfold } from "react-icons/ai";
import {
  Link,
  Button,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
} from "react-scroll";
const MobileNav = () => {
    const [open, setOpen] = useState(false)
    // handle open
    const handleOpen = () =>{
        setOpen(!open);
    };

    // handle menu click
    const handleMenuClick = ()=>{
        setOpen(false);
    };
  return (
    <>
     <div className="mobile-nav">
        <div className="mobile-nav-header">
            {open ? (<AiOutlineMenuUnfold size={30} className='mobile-nav-icon' onClick={handleOpen}/>): ( <IoMenu  size={30} className='mobile-nav-icon' onClick={handleOpen} />)}
        
        <span className='mobile-nav-title'>My Portfolio App</span>
        </div>
        {open && (
        <div className="mobile-nav-menu">
        <div className="nav-items">
            <div className="nav-item">
              <div className="nav-link">
                <Link
                  to="home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={100}
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
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
                  onClick={handleMenuClick}
                >
                <IoMdContacts />
                Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
        )}
        </div> 
    </>
  )
}

export default MobileNav
