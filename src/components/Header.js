import React,{ useState } from 'react';
import logo from "../images/header_mobile.png";
import { FaBars } from 'react-icons/fa';
import { Link } from "gatsby";
import "../styles/header.css";
import { useLocation } from "@reach/router";
import {Flex, Box} from '@chakra-ui/react';

// still need this styling besides the check location then style code in the component itself because url seems to add a / when refreshed 
const NavLink = props => (
    <Box>
        <Link
        {...props}
        getProps={({ isCurrent }) => {
            // the object returned here is passed to the
            // anchor element's props
            if (isCurrent) {
                console.log(isCurrent);
                return {
                    style: {
                        fontWeight: "bold",
                        borderBottom: "1px solid black",
                        color: "black",
                        paddingBottom: "10px"
                    }
                }
            }
        }}
        />
    </Box>
  );

const linkdeco = {
    fontWeight: "bold",
    borderBottom: "1px solid black",
    color: "black",
    paddingBottom: "10px"
}
  

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    const location = useLocation();
    return (
        <header>  
        {/* <div className="login-nav desktop-only">
            <div className="">info@growth</div>
            <div>login</div>
        </div> */}
        <a className="navigate-to-main-content" href='#main'>Skip to main content</a>
        <div className="desktop-nav-container desktop-only">
            <Link to="/"><img src={logo} alt="logo"/></Link>
            <Flex className="desktop-nav">
                <NavLink to="/About-the-Deal" className="desktop-nav-element" style={location.pathname === "/About-the-Deal/"?linkdeco : {}}>About the Deal</NavLink>
                <NavLink to="/Projects-Programmes" className="desktop-nav-element" style={location.pathname === "/Projects-Programmes/"?linkdeco : {}}> Projects &amp; Programmes</NavLink>
                <NavLink to="/Digital-Strategy" className="desktop-nav-element" style={location.pathname === "/Digital-Strategy/"?linkdeco : {}}> Digital Strategy</NavLink>
                <NavLink to="/News" className="desktop-nav-element" style={location.pathname === "/News/"?linkdeco : {}}> News</NavLink>
                <NavLink to="/Your-Borderlands" className="desktop-nav-element" style={location.pathname === "/Your-Borderlands/"?linkdeco : {}}> Your Borderlands</NavLink>
                <NavLink to="/How-we-work" className="desktop-nav-element" style={location.pathname === "/How-we-work/"?linkdeco : {}}> How we work</NavLink>
            </Flex>
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
                        <li className="list"><Link to="/Digital-Strategy" className="textDeco"> Digital Strategy</Link></li>
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