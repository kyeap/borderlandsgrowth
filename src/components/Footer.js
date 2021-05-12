import React from "react";
import { Link } from "gatsby"

const Footer = () => {
    return (
        <div className="footer-container">
            <Link to="/Terms" >Terms of Use </Link> : 
            <Link to="/Privacy" > Privacy Status</Link>
        </div>
    )
}

export default Footer;