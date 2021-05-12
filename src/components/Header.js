import React,{ useState } from 'react';
import logo from "../images/header_mobile.png";
import { FaBars } from 'react-icons/fa';

const flex = {
    display: "flex",
    margin: "15px",
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
            <a href="https://borderlandsgrowth.netlify.app/"><img src={logo} alt="logo"/></a>
            <div onClick={()=>{setMenuToggle(x=>!x)}}>
                <FaBars style={blue}/>
            </div>
        </div>
        {
            menuToggle && 
            <div>
                <ul style={noindent}>
                    <li style={list}><a style={textDeco} href="https://borderlandsgrowth.netlify.app//About-the-Deal" target="">About the Deal<i></i></a></li>
                    <li style={list}><a style={textDeco} href="https://borderlandsgrowth.netlify.app//Projects-Programmes" target="">Projects &amp; Programmes<i></i></a></li>
                    <li style={list}><a style={textDeco} href="https://borderlandsgrowth.netlify.app//News" target="">News<i></i></a></li>
                    <li style={list}><a style={textDeco} href="https://borderlandsgrowth.netlify.app//Your-Borderlands" target="">Your Borderlands<i></i></a></li>
                    <li style={list}><a style={textDeco} href="https://borderlandsgrowth.netlify.app//How-we-work" target="">How we work<i></i></a></li>
                </ul>
            </div>
        }
        </>
    );
};

export default Header;