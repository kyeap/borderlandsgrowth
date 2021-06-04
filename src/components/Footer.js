import React from "react";
import { Link } from "gatsby"

const Footer = () => {
    return (
        <footer className="footer-wrapper">
            {/* <div className="footer-bottom"> */}
                <div className="footer-container">
                    <div>
                        <a href="mailto:info@borderlandsgrowth.com">info@borderlandsgrowth.com</a>
                    </div>
                    <div>
                        <Link to="/Terms" className="anchor_style">Terms of Use </Link> : 
                        <Link to="/Privacy" className="anchor_style"> Privacy Status</Link>
                    </div>
                </div>
            {/* </div> */}
        </footer>
    )
}

export default Footer;