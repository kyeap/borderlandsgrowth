import React from "react";
import '../styles/main.css';

import Header from "../components/Header";
import Footer from "../components/Footer.js";

const HowWeWork = () => {
    return (
        <>
            <Header/>
            <div><strong>How We Work</strong></div>

            <div>The five councils in the Borderlands Partnership have signed a legally binding Collaboration Agreement which forms the basis of our governance plan, setting out the arrangements for the oversight and delivery for the Deal, to ensure that a robust governance framework is in place. Clear governance provides assurance to the UK Government, Scottish Government, Borderlands local authorities and the wider Borderlands regional partners that there is open and transparent decision making and project delivery.</div>
            <div>Central to the governance arrangements is the <strong>Partnership Board</strong>, responsible for oversight and decision making relating to delivery of the Deal programme of investment. The Board is supported by Chief Executives, Chief Economic Officers and Finance Officers from the partner authorities.</div>
            <div>There are six seats on the Partnership Board, made up of one representative from each of the partner local authorities, and one for the Chair of the Economic Forum:</div>

            <ul>
                <li>Cllr John Mallinson, Leader Carlisle City Council, Co-Chair Borderlands Partnership Board</li>
                <li>Cllr Shona Haslam, Leader Scottish Borders Council, Co-Chair Borderlands Partnership Board</li>
                <li>Cllr Stuart Young, Leader Cumbria County Council</li>
                <li>Cllr Elaine Murray, Leader Dumfries and Galloway Council</li>
                <li>Cllr Glen Sanderson, Leader Northumberland County Council</li>
                <li>Jack Stopforth MBE MA, Chair Borderlands Economic Forum</li>
            </ul>

            <div>The Borderlands <strong>Economic Forum</strong> is an important part of our Deal. The remit of the Economic Forum is to provide an opportunity for wider stakeholders - with a particular focus on the economic development agencies and the business community to contribute towards maximising the impact of the Growth Deal in stimulating inclusive economic growth within the area served by the Growth Deal.</div>
            <div><em>Future minutes of the Partnership Board and Economic Forum meetings will be posted here.</em></div>
            <div><strong>Borderlands PMO </strong>- The Borderlands Project Management Office is in place to oversee the development, delivery and effective day to day management of the Deal. The team will procure specialist appraisal support where necessary to support its work. Please email <a href="mailto:info@borderlandsgrowth.com">info@borderlandsgrowth.com</a> to speak with a member of the team.</div>
            <div><strong>Accountable Bodies </strong>- Dumfries and Galloway Council has the role of accountable body as regards both the Scottish Government funding for the Growth Deal and that part of the UK Government funding which relates to Growth Deal Projects physically located in Scotland. Northumberland County Council has the role of accountable body as regards that part of the UK Government funding which relates to Growth Deal projects physically located in England. The accountable bodies will enter into the financial legal agreements with the UK and Scottish Government in respect of the Growth Deal.</div>
            <Footer/>
        </>
    );
};

export default HowWeWork;