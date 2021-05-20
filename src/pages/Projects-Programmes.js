import React from "react";
import '../styles/main.css';

import Layout from "../components/Layout.js"
import BannerText from "../components/BannerText.js";

import Banner from "../images/project_programmers_banner.jpg";
import Map from "../images/project_programmers_map.jpg";
import Bottom from "../images/project_programmers_bottom.jpg";


const ProjectProgrammes = () => {
    return (
        <Layout>
            <img src={Banner} alt="Banner" className="banner" role="presentation"/>
            <BannerText
                text = "With projects and programmes located across the Borderlands, our strategic approach means our projects reinforce each other to transform our area. Some are in distinct locations making the most of an existing asset or creating something new whilst others will be delivered across the full area as part of the overarching Deal themes."
            />
            <div className="container">
                <div className="title sub">The projects and programmes included in the Deal&nbsp;are shown in this map of our region</div>
                <img src={Map} alt="Map of the region" className="banner" role="presentation"/>
                <div><strong>&pound;30m of advanced funding has already been released, for projects which have achieved full business case sign off. These projects are:</strong></div>

                <ul>
                    <li>Ad Gefrin Visitor Experience and Distillery in Wooler (<a className="anchor_style" href="https://adgefrin.co.uk/">find out more</a>)</li>
                    <li>Lillidorei at The Alnwick Garden (<a className="anchor_style" href="https://www.alnwickgarden.com/">find out more</a>)</li>
                    <li>Phase 1 of the Carlisle Station Gateway and Citadels</li>
                    <li>Development of the Borderlands Energy Masterplan</li>
                    <li>Digital voucher top up scheme in Cumbria and Northumberland (<a className="anchor_style" href="/Digital-Voucher-Scheme">find out more</a>)</li>
                </ul>
                <p>More information on each of the divrojects and programmes listed below is available within the&nbsp;<a className="anchor_style" href="/Portals/0/Borderlands%20Inclusive%20Growth%20Deal%20Deal%20Document%202021%20-%20Signed.pdf?ver=2021-03-17-183958-067">Deal Document</a>.</p>
                <img src={Bottom} alt="Table that lists the various investment theme, their description and project or programme" className="banner" tabindex="0"/>
            </div>
        </Layout>
    );
};

export default ProjectProgrammes;