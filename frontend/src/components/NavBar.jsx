import { useState } from "react";
import { useActiveSection } from "./useActiveSection";
import Resume from '../assets/RESUME.pdf';
import MenuIcon from '../assets/mobile-menu.svg';

function NavBar() {
  const [active, setActive] = useState("home");
  const [isActive, setIsActive] = useState(false);
  useActiveSection(setActive);

  const linkCls = (id) => (active === id ? "list-item-a" : "list-item-i");

  return (
    <>
    <div className="nav-bar">
      <div className="nav-left">
        <span className="logo-txt">sam.</span>
      </div>

      <div className="nav-right">
        <ul className="nav-list-right">
          <li><a className={linkCls("home")} href="#home">Home</a></li>
          <li><a className={linkCls("about")} href="#about">About</a></li>
          <li><a className={linkCls("projects")} href="#projects">Projects</a></li>
         {/*<li><a className={linkCls("contact")} href="#contact">Contact</a></li>*/}
        </ul>

        <a className="resume-btn" href={Resume} download="RESUME.pdf" target="_blank">
          Download <br /> Resume
      </a>

      {/* Mobile Nav */}
      <span className="menu-icon" onClick={() => setIsActive(!isActive)}>☰</span>
      </div> 
    </div>

    <div className={isActive ? "mobile-nav-active" : "mobile-nav-inactive"}>
      <span className="close-icon" onClick={() => setIsActive(false)}>×</span>
      <ul className="mobile-nav-list">
        <li id="mobile-nav-item" onClick={() => setIsActive(!isActive)}><a  href="#home">Home</a></li>
        <li id="mobile-nav-item" onClick={() => setIsActive(!isActive)}><a  href="#about">About</a></li>
        <li id="mobile-nav-item" onClick={() => setIsActive(!isActive)}><a  href="#projects">Projects</a></li>
        <li id="mobile-nav-item" onClick={() => setIsActive(!isActive)}><a  download="RESUME.pdf" target="_blank" href={Resume}>Download Resume</a></li>
      </ul>
    </div>
    </>
  );
}

export default NavBar;
