
import React from 'react';

import Layout from "../components/Layout.js"
import BannerText from "../components/BannerText.js";
import '../styles/main.css';
import {FaRss } from 'react-icons/fa';

// import images
import banner from "../images/banner_mobile.jpg";
import home_bottom from "../images/home_bottom.png";
import CCClogo from "../images/CCClogo.png";
import CumbriaCountyCouncillogo from "../images/Cumbria-County-Council-logo.png";
import dumfriesNgalloway from "../images/dumfries-and-galloway.png";
import NCC_logo from "../images/NCC_logo.png";
import Scottish_border_logo from "../images/Scottish_border_logo.png";
import Scottish_Government_logo from "../images/Scottish_Government_logo.png";
import UKGovernmentLogo from "../images/UK-government-logo.png";

//import PDFs
import DealSummary from "../data/BorderlandsInclusiveGrowthDealsummaryMarch21.pdf";
import DealDocument from "../data/BorderlandsInclusiveGrowthDealDealDocument2021-Signed.pdf";
const Home = () => {

  return (
    <Layout>
      <img src={banner} alt="home banner top" className="banner" role="presentation"/>
      <BannerText
        textStrong = "The Borderlands Partnership"
        text = "has been established to unlock the potential for sustainable and inclusive economic growth across the South of Scotland and North of England."
      />
      <div className="container-flex">
        <div className="home-container-column-left">
          <p className="paragraph">
            The Borderlands Inclusive Growth Deal was formally signed on the18th March 2021, bringing in up to £452million of fresh investment to the Borderlands area. Ministers of the UK and Scottish Governments and representatives of the five councils of the Borderlands Partnership signed the Deal at a virtual ceremony.
          </p>
          <p>
          The Deal is truly distinctive, covering the largest geographical area of any regional growth Deal negotiated with the UK and Scottish Governments and it is the first cross-border deal.
          </p>
          <div className="button-container">
            <a href={DealSummary}>
              <button className="button-purple">Read more about the Deal in our summary document</button>
            </a>
          </div>
          <p> Read the full Deal Document</p>
          <div className="button-container">
            <a href={DealDocument}>
              <button className="button-purple">Borderlands Inclusive Growth Deal Document</button>
            </a>
          </div>
          <div className="button-container">
            <a href="https://www.youtube.com/watch?v=4x0wjhjWoas">
              <button className="button-purple">View the Virtual Deal Signing Ceremony</button>
            </a>
          </div>
          <p>Our programme of investment will deliver significant economic benefit for our communities and businesses. Over the programme lifetime and a further 10 years to capture the benefits, we estimate that the Borderlands Inclusive Growth Deal will:</p>
          <ul>
            <li>Benefit 1.1 million residents</li>
            <li>Deliver an additional 5,500 job opportunities</li>
            <li>Attract more than four million extra tourists to the area</li>
            <li>Improve mobile and digital connections</li>
            <li>Unlock investment in towns across the area</li>
            <li>Generate around &pound;1.1bn in GVA to the UK economy</li>
          </ul>

          <p>The Deal will also tackle the 3 principle socio-economic challenges of our region</p>

          <ul>
            <li>Narrowing the productivity gap</li>
            <li>Increasing the working age population</li>
            <li>Delivering inclusive growth, by addressing digital exclusion; the earnings gap and access to quality jobs and access to education</li>
          </ul>
          <img src={home_bottom} alt="Benefits of Borderlands Inclusive Growth deal" className="banner" role="presentation"/>
        </div>
        <div className="home-container-column-right">
          <div className="newsNinformation title"><strong>News</strong> and <strong>information</strong></div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/Portals/0/Borderlands%20Press%20Release%20-Deal%20signing%20%20final%20version%20for%20issue.docx">The ground-breaking Borderlands Inclusive Growth Deal has been signed</a>
          </div>
          <div className="newsNinformation">
            <a href="http://www.yourcumbria.org/News/2018/ambitiousplansforcarlislestationdevelopmentareontrack.aspx" target="_self">Ambitious plans for Carlisle Station development are on track</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/Portals/0/Borderlands Press Release - Spending review 251120 final .pdf" target="_self">News Release 26 / 11 / 20</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/News/theres-still-time-to-apply-to-borderlands-economic-forum" target="_self">There's still time to apply to Borderlands Economic Forum</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/newletters/Borderlands Newsletter October 2020.pdf" target="_self">Borderlands Newsletter October 2020</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/News/borderlands-economic-forum-member-recruitment" target="_self">Borderlands Economic Forum Member Recruitment</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/News/Borderlands Press Release - 25 06 2020.pdf" target="_self">News Release 25/06/20</a>
          </div>
          <div className="newsNinformation">
            <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/newletters/Borderlands Newsletter June 2020.pdf" target="_self">Newsletter June 2020</a>
          </div>
          <div className="RRS">
            <FaRss className="RSS-icon"/>
            <a className="RSS-text" href="https://www.borderlandsgrowth.com/Home/rss/427" target="_blank">RSS</a>
          </div>
        </div>
      </div>
      <div className="logo-container">
        <a href="https://www.carlisle.gov.uk/"><img role="presentation" src={CCClogo} alt="ccc logo" /></a>
        <a href="https://www.cumbria.gov.uk/"><img role="presentation" src={CumbriaCountyCouncillogo} alt="cumbria logo" /></a>
        <a href="https://www.scotborders.gov.uk/"><img role="presentation" src={Scottish_border_logo} alt="scottish boarder logo" /></a>
        <a href="https://www.northumberland.gov.uk/Home.aspx"><img role="presentation" src={NCC_logo} alt="Ncc logo" /></a>
        <a href="https://www.dumgal.gov.uk/"><img role="presentation" src={dumfriesNgalloway} alt="dumfries logo" /></a>
        <a href="https://www.gov.scot/"><img role="presentation" src={Scottish_Government_logo} alt="scottish goverment logo" /></a>
        <a href="https://www.gov.uk/"><img role="presentation" src={UKGovernmentLogo} alt="uk goverment logo" /></a>
      </div>
    </Layout>
  );
};

export default Home;