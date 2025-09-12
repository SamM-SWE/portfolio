import NavBar from "../components/NavBar"
import me from "../assets/me.png"
import LinkedInLogo from '../assets/LinkedIn_logo.svg'
import GitHubLogo from '../assets/git.png'

import NodeLogo from '../assets/nodsjs.svg'
import SpringLogo from '../assets/spring.svg'
import ReactLogo from '../assets/react-js-icon.svg'
import TailwindLogo from '../assets/tailwind.svg'

import Arc from "../components/Arc"

function Header() {
    return (
        <section id="home" className="header">
            
            <img src={me} className="me-img" />

            <div className="first-side-text">
                <span className="span-class">
                    <span className="p1">Hi, I'm </span>
                    <span className="p2">Sam.</span>
                </span>

                <span className="span-class2">
                    <span className="p3">Passionate, </span>
                    <span className="p4"><br/>Software Engineer</span>
                </span>
            </div>

            
            <button className="social-button1" onClick={() => window.open("https://www.linkedin.com/in/samuel-monneh-093497351/", "_blank")}>
                Connect with me on
                <img src={LinkedInLogo} className="linkedin-logo"/>
            </button>

            <button className="social-button2" onClick={() => window.open("https://github.com/SamM-SWE", "_blank")}>
                Check out my
                <img src={GitHubLogo} className="git-logo"/>
            </button>



            <div className="mobile-social-buttons">
                <button className="social-button1-mobile" onClick={() => window.open("https://www.linkedin.com/in/samuel-monneh-093497351/", "_blank")}>
                    Connect with me
                    <img src={LinkedInLogo} className="linkedin-logo"/>
                </button>

                <button className="social-button2-mobile" onClick={() => window.open("https://github.com/SamM-SWE", "_blank")}>
                    Check out my
                    <img src={GitHubLogo} className="git-logo"/>
                </button>
            </div>
            
            <div className="svg-layout">
                <img src={ReactLogo} id="svg-item" />
                <img src={NodeLogo} id="svg-item" />
                <img src={SpringLogo} id="svg-item" />
            </div>

            <div className="black-bar"/>

            <Arc />
            
        </section>
    )
}

export default Header