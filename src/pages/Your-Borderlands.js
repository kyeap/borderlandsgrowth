import React from "react";
import '../styles/main.css';
import { FaCogs, FaBullhorn, FaPencilAlt } from 'react-icons/fa';

import Header from "../components/Header";
import Footer from "../components/Footer";

import DropdownCard from "../components/DropdownCard";

import borderlands_banner from "../images/borderlands_banner.png";
import business_banner from "../images/business_banner_1200.png";

import {newletters} from "../data/borderlands.js";

const Borderlands = () => {
    return (
        <>
            <Header/>
            <img src={borderlands_banner} alt="Banner" className="banner"/>
            <FaCogs className="FaCogs"/>
            <div className="title">Find Out More</div>
            <div className="title sub">If you would like to find out more, please contact us at:</div>
            <p><a className="anchor_style" href="mailto:info@borderlandsgrowth.com?subject=Enquiry%20from%20the%20Borderlands%20Website">info@borderlandsgrowth.com</a></p>
            <p>Please note, the Borderlands Inclusive Growth Deal is a strategic programme with agreed projects / programmes of activity and therefore is not open to individual funding requests/applications.&nbsp;</p>
            <div className="button-container">
                <div className="button-purple">Upcoming Events</div>
            </div>
            <div className="card-container">
                <div className="card-title-container">
                    <FaBullhorn className="horn-icon"/>
                    <div className="title">Stay in Touch</div>
                </div>
                <div className="card-container-context-container">
                    <div>
                        For <strong>regular</strong> news and updates why not <strong>Sign up</strong> to receive a Borderlands Growth Deal Newsletter
                    </div>
                    <button className="card-button">
                        <FaPencilAlt/> Sign me up please
                    </button>
                </div>
            </div>
            <div className="title">Borderlands <strong>Newsletters</strong></div>
            {newletters.map((newsletter)=>{
                return (
                    <DropdownCard
                        title={newsletter.title}
                        date= {newsletter.date}
                        text = {newsletter.text}
                        download = {newsletter.download}
                        link = {newsletter.link}
                    />
                )
            })}
            <div>If you are a <strong>resident</strong></div>
            <img src={business_banner} alt="banner" className="banner"/>
            <div>More than one million people live in the Borderlands region and we want to make sure that our Inclusive Growth Deal provides lasting benefits for everyone that calls our area home. We want to improve transport links, improve broadband connections and support schemes that provide clean, cheap energy to local households.</div>
            <div>We also want to support our communities by developing skills and creating more jobs and to make sure that these jobs are better paid</div>

            <div>If you are a <strong>business</strong></div>
            <img src={business_banner} alt="banner" className="banner"/>
            <div>The Borderlands Inclusive Growth Deal aims to tackle our area&rsquo;s economic challenges - the need for more people to live within the region, continued and improved support for existing businesses, and to make our area the place of choice for new businesses.</div>
            <div>We want to attract more people to the area to help our economy. To support this we are aiming for improved digital and transports links. We also need to support the development of training and skills.&nbsp;</div>

            <div>If you are a<strong> visitor</strong></div>
            <img src={business_banner} alt="banner" className="banner"/>
            <div>The Borderlands is a great place to visit and stay and we&rsquo;d love to meet you!&nbsp; There&rsquo;s lots to see and do - we want to promote the all the great things the area has to offer.</div>
            <div>The area is home to two UNESCO World Heritage Sites - The Lake District and Hadrian&rsquo;s Wall, as well as The UK&rsquo;s first Dark Sky Park in Galloway Forest Park, one of only four in the western world and of course, Gretna Green, the iconic wedding capital of the UK, as well as other prominent tourism destinations.&nbsp;&nbsp;</div>
            <div>We want visitors to extend their stay so that they can experience the whole region.</div>
            <Footer/>
        </>
    );
};

export default Borderlands;