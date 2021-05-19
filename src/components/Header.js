import React,{ useState } from 'react';
import logo from "../images/header_mobile.png";
import { FaBars } from 'react-icons/fa';
import { Link } from "gatsby"
import "../styles/header.css"

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <header>  
        <div className="login-nav desktop-only">
            <div className="">info@growth</div>
            <div>login</div>
        </div>
        <div className="desktop-nav-container desktop-only">
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <div className="desktop-nav">
                <Link to="/About-the-Deal" className="desktop-nav-element" activeClassName="desktop-nav-element-active">About the Deal</Link>
                <Link to="/Projects-Programmes" className="desktop-nav-element" activeClassName="desktop-nav-element-active"> Projects &amp; Programmes</Link>
                <Link to="/News" className="desktop-nav-element" activeClassName="desktop-nav-element-active"> News</Link>
                <Link to="/Your-Borderlands" className="desktop-nav-element" activeClassName="desktop-nav-element-active"> Your Borderlands</Link>
                <Link to="/How-we-work" className="desktop-nav-element" activeClassName="desktop-nav-element-active"> How we work</Link>
            </div>
        </div>
        <div className="mobile-only">
            <div className="mobile-nav">
                <Link to="/"><img src={logo} alt="logo"/></Link>
                <div onClick={()=>{setMenuToggle(x=>!x)}}>
                    <FaBars className="blue"/>
                </div>
            </div>
            {
                menuToggle && 
                <div className="mobile-only">
                    <ul className="noindent">
                        <li className="list"><Link to="/About-the-Deal" className="textDeco">About the Deal</Link></li>
                        <li className="list"><Link to="/Projects-Programmes" className="textDeco"> Projects &amp; Programmes</Link></li>
                        <li className="list"><Link to="/News" className="textDeco"> News</Link></li>
                        <li className="list"><Link to="/Your-Borderlands" className="textDeco"> Your Borderlands</Link></li>
                        <li className="list"><Link to="/How-we-work" className="textDeco"> How we work</Link></li>
                    </ul>
                </div>
            }
        </div>
        </header>
    );
};

export default Header;