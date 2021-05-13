import React from "react";
import '../styles/main.css';

import Header from "../components/Header";
import Footer from "../components/Footer.js";
import BannerText from "../components/BannerText.js";

import deal_bottom from "../images/deal_bottom.png";
import deal_banner from "../images/deal_banner.jpg";


const DealPage = () => {
    return (
        <>
            <Header/>
            <img src={deal_banner} alt="deal banner" className="banner"/>
            <BannerText
                textStrong = "The Borderlands Partnership"
                text = "is working together to deliver transformative change across the region to maximise the benefits of inclusive growth."
            />
            <div className="container">
                <div className="title">
                About the Deal
                </div>
                <p>
                    The Borderlands Inclusive Growth Deal is an integrated investment package, ensuring there is a balance between high profile place-based projects together with Borderlands-wide investment programmes that meet the needs and opportunities of the rural nature of the region. It will bring up to £450million of fresh investment into our region, delivering benefits for the long term.
                </p>
                <p>
                    The strategic approach includes five high profile projects which anchor the Borderlands Inclusive Growth Deal. These projects have been developed to have a transformational impact on their area as well as the wider regional economy and their strategic nature means they are cross-cutting in their impact and in many instances contribute to all four strategic themes. Equally important in this strategic approach are the Borderlands-wide investment programmes that are designed to ensure benefits can be realised across the whole of the Borderlands region.
                </p>
                <img src={deal_bottom} alt="title" className="banner"/>
                <div className="title">
                    Four Strategic Themes:
                </div>
                <p className="title sub"> 
                    Improving Places
                </p>
                <p>
                This aims to revitalise places across the Borderlands region to attract people to live, work and visit by:
                </p>
                <ul>
                    <li>Bringing forward strategic projects that will transform the role and perception of places in the region</li>
                    <li>Investing in smaller market towns to reinvigorate and repurpose towns to support thriving and sustainable communities</li>
                    <li>Capitalising on our heritage, cultural and recreational assets to promote the region as a destination to visit and as a place to live and work</li>
                </ul>
                <div className="title sub">  
                    Enabling Infrastructure
                </div>
                <p>
                    This aims to invest in the infrastructure needed to support improvements in connectivity, helping people to access the region and addressing perceptions of poor connectivity by:
                </p>
                <ul>
                    <li>Improving Carlisle Station as the gateway to the Borderlands region, providing the enabling infrastructure for Carlisle to be the region’s HS2 stop. HS2 Birmingham to Scotland trains will also call at Penrith or Oxenholme stations in Cumbria on alternate hours.</li>
                    <li>Establishing a new campus for the University of Cumbria adjacent to Carlisle station and providing the higher education infrastructure to enable the university to fulfil its potential in supporting skills development, including digital skills, across Cumbria and wider region.</li>
                    <li>Achieving as close as possible to 100% coverage of digital and mobile infrastructure to enable businesses and residents to be connected in a digital world. This will include addressing gaps in provision not met by the Shared Rural Network programme and the roll-out of full fibre from the R100 programme and the UK’s F20 programme</li>
                </ul>
                <div className="title sub">
                    Encouraging green growth
                </div>
                <p>
                    This aims to capitalise on the green credentials of the Borderlands region and to facilitate decarbonisation and the creation of new high value jobs through supporting low carbon energy generation and carbon reduction scheme by:
                </p>
                <p>
                    Developing Chapelcross as the region’s clean growth strategic investment site for low carbon energy generation and energy efficient businesses.
                </p>
                <p>
                    Developing an energy masterplan to identify and then bring forward priority investments to support the transition to a low carbon economy and contribute to achieving the UK and Scottish Government targets for net zero by 2050/2045.
                </p>
                <p>
                    Capitalising on the region’s natural capital to be an exemplar for the UK in the development of new and innovative clean growth rural land management practices.
                </p>
            </div>
            <div className="title sub">
                Download Borderlands Inclusive Growth Deal Documents
            </div>
            <div> Will think of a way to do this</div>
            <div>Maybe better not using table? </div>
            <Footer/>
        </>
    );
};

export default DealPage;