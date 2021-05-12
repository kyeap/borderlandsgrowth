
import React from 'react';
import Header from '../components/Header.js';
import Footer from "../components/Footer.js";
import '../styles/main.css';

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

const Home = () => {

  return (
    <>
      <Header/>
      <img src={banner} alt="norway" className="banner"/>
      <div className="bannerText"> 
          <strong>The Borderlands Partnership </strong>
          has been established to unlock the potential for sustainable and inclusive economic growth across the South of Scotland and North of England.
      </div>
      <div className="paragraph">
        The Borderlands Inclusive Growth Deal was formally signed on the18th March 2021, bringing in up to £452million of fresh investment to the Borderlands area. Ministers of the UK and Scottish Governments and representatives of the five councils of the Borderlands Partnership signed the Deal at a virtual ceremony.
      </div>
      <div>
      The Deal is truly distinctive, covering the largest geographical area of any regional growth Deal negotiated with the UK and Scottish Governments and it is the first cross-border deal.
      </div>
      <button>Read more about the Deal in our summary document</button>
      <div> Read the full Deal Document</div>
      <button>Borderlands Inclusive Growth Deal Document</button>
      <button>View the Virtual Deal Signing Ceremony</button>
      <div>Our programme of investment will deliver significant economic benefit for our communities and businesses. Over the programme lifetime and a further 10 years to capture the benefits, we estimate that the Borderlands Inclusive Growth Deal will:</div>
      <ul>
        <li>Benefit 1.1 million residents</li>
        <li>Deliver an additional 5,500 job opportunities</li>
        <li>Attract more than four million extra tourists to the area</li>
        <li>Improve mobile and digital connections</li>
        <li>Unlock investment in towns across the area</li>
        <li>Generate around &pound;1.1bn in GVA to the UK economy</li>
      </ul>

      <div>The Deal will also tackle the 3 principle socio-economic challenges of our region</div>

      <ul>
        <li>Narrowing the productivity gap</li>
        <li>Increasing the working age population</li>
        <li>Delivering inclusive growth, by addressing digital exclusion; the earnings gap and access to quality jobs and access to education</li>
      </ul>
      <img src={home_bottom} alt="home bottom" className="banner"/>
      <div>News and information</div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Portals/0/Borderlands%20Press%20Release%20-Deal%20signing%20%20final%20version%20for%20issue.docx">The ground-breaking Borderlands Inclusive Growth Deal has been signed</a>
      </div>
      <div>
        <a href="http://www.yourcumbria.org/News/2018/ambitiousplansforcarlislestationdevelopmentareontrack.aspx" target="_self">Ambitious plans for Carlisle Station development are on track</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Portals/0/Borderlands Press Release - Spending review 251120 final .pdf" target="_self">News Release 26 / 11 / 20</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/News/theres-still-time-to-apply-to-borderlands-economic-forum" target="_self">There's still time to apply to Borderlands Economic Forum</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/newletters/Borderlands Newsletter October 2020.pdf" target="_self">Borderlands Newsletter October 2020</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/News/borderlands-economic-forum-member-recruitment" target="_self">Borderlands Economic Forum Member Recruitment</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/News/Borderlands Press Release - 25 06 2020.pdf" target="_self">News Release 25/06/20</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Portals/0/Documents/newletters/Borderlands Newsletter June 2020.pdf" target="_self">Newsletter June 2020</a>
      </div>
      <div>
        <a href="https://www.borderlandsgrowth.com/Home/rss/427" target="_blank"><span>RSS</span></a>
      </div>
      <img src={CCClogo} alt="ccc logo" />
      <img src={dumfriesNgalloway} alt="dumfries logo" />
      <img src={CumbriaCountyCouncillogo} alt="cumbria logo" />
      <img src={Scottish_Government_logo} alt="scottish goverment logo" />
      <img src={Scottish_border_logo} alt="scottish boarder logo" />
      <img src={UKGovernmentLogo} alt="uk goverment logo" />
      <img src={NCC_logo} alt="Ncc logo" />
      <Footer/>
    </>
  );
};

export default Home;