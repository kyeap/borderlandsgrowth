import React from "react";
import { Link } from "gatsby"
import {FaEnvelope} from 'react-icons/fa';
import {Flex, chakra} from "@chakra-ui/react";

const Footer = () => {
    const Envelope = chakra(FaEnvelope);

    return (
        <footer className="footer-wrapper">
            {/* <div className="footer-bottom"> */}
                <div className="footer-container">
                    <Flex alignItems="center">
                        <Envelope mr="2"/><a href="mailto:info@borderlandsgrowth.com">info@borderlandsgrowth.com</a>
                    </Flex>
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