import React,{ useState } from 'react';
import logo from "../images/header_mobile.png";
import { FaBars } from 'react-icons/fa';
import { Link } from "gatsby"

const flex = {
    display: "flex",
    margin: "15px",
    width: "100%",
}

const blue = {
    color: "#2980B9",
    lineHeight: "1",
    fontSize: "20px",
}

const noindent ={
    padding: "0",
}

const list = {
    listStyle: "none",
    margin: "10px",
    borderBottom: "solid 1px",
    padding: "10px",
    fontSize: "13px",
}

const textDeco = {
    textDecoration: "none",
    color: '#474950',
    fontWeight:"400",
    textTransform: "uppercase",
    fontFamily:"lato",
}

const Header = () => {
    const [menuToggle, setMenuToggle] = useState(false);
    return (
        <>  
        <div style={flex}>
            <Link to="/" className="textDeco"><img src={logo} alt="logo"/></Link>
            <div onClick={()=>{setMenuToggle(x=>!x)}}>
                <FaBars style={blue}/>
            </div>
        </div>
        {
            menuToggle && 
            <div>
                <ul style={noindent}>
                    <li style={list}><Link to="/About-the-Deal" style={textDeco}>About the Deal</Link></li>
                    <li style={list}><Link to="/Projects-Programmes" style={textDeco}> Projects &amp; Programmes</Link></li>
                    <li style={list}><Link to="/News" style={textDeco}> News</Link></li>
                    <li style={list}><Link to="/Your-Borderlands" style={textDeco}> Your Borderlands</Link></li>
                    <li style={list}><Link to="/How-we-work" style={textDeco}> How we work</Link></li>
                </ul>
            </div>
        }
        </>
    );
};

export default Header;