import { useState } from "react";
import { useActiveSection } from "./useActiveSection";
import downloadImg from '../assets/download-img.png';
import Resume from '../assets/RESUME.pdf';

function NavBar() {
  const [active, setActive] = useState("home");
  useActiveSection(setActive);

  const linkCls = (id) => (active === id ? "list-item-a" : "list-item-i");

  return (
    <div className="nav-bar">
      <div className="nav-left">
        <span className="logo-txt">sam.</span>
      </div>

      <div className="nav-right">
        <ul className="nav-list-right">
          <li><a className={linkCls("home")} href="#home">Home</a></li>
          <li><a className={linkCls("about")} href="#about">About</a></li>
          <li><a className={linkCls("projects")} href="#projects">Projects</a></li>
         {/*<li><a className={linkCls("contact")} href="#contact">Contact</a></li> */}
        </ul>

        <a className="resume-btn" href={Resume} download="RESUME.pdf" target="_blank">
          Download <br /> Resume
      </a>

      </div>
    </div>
  );
}

export default NavBar;
