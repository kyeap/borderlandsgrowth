import React, {useState} from "react";
import {chakra} from "@chakra-ui/react";
import {Link} from "gatsby";

import Layout from "../../components/Layout.js"

const News = () => {
    const [page, setPage] = useState(0);

    return (
        <Layout>
            <div className="bannerText-container">
                <div className="bannerText-wrapper">
                    <div className="bannerText"> 
                        All the latest <strong>News</strong> and <strong>Information</strong> on the Borderlands Inclusive Growth Deal
                    </div>
                </div>
            </div>
            <div className="container">
                <chakra.h1 color="blue">There's still time to apply to Borderlands Economic Forum</chakra.h1>
                <p>The Borderlands Inclusive Growth Deal Economic Forum will be a central part of how the Growth Deal will be delivered, embedding the voice of businesses, third sector and regional strategic economic partners. It is a fantastic opportunity for individuals from the business community who are passionate about the place they live and work to contribute to the future of the Borderlands. The team are now seeking to recruit ten leading local business people from across the Borderlands to join the new Economic Forum.</p>
                <p>The role of the Economic Forum will be a proactive one in, helping to deliver the Deal, anchoring our activities in the local and regional business community and looking forward to new opportunities for joint work. Members will champion the Deal when engaging with their own networks and will support the implementation of the Deal. While the projects and financial arrangements have already been agreed, this group will support Borderlands partners towards a shared ambition of achieving sustainable and inclusive economic growth for the Borderlands. The Chair of the Economic Forum shall also serve as a member of the Borderlands Partnership Board alongside the Borderlands local authority Leaders.</p>
                <p>Applicants will have significant experience and a successful track record as an owner or senior executive of a business and need to either live or work in the Borderlands Partnership area (the local authority areas of Carlisle City Council, Cumbria County Council, Dumfries and Galloway Council, Northumberland County Council and Scottish Borders Council). They will demonstrate the necessary strategic leadership and corporate governance skills to operate effectively at a regional economic level, and have passion and commitment to work collaboratively in the best interests of the Borderlands and its economy.</p>
                <p>The Borderlands Partnership is committed to equality of opportunity and would welcome applications from female business leaders and those with protected characteristics. The roles are likely to require a time commitment of 3-4 hours per quarter. Board appointments are for a three-year term, with the option for re-appointment for a further three-year period.</p>
                
                <p>For more information, please download the information pack <Link to="How-we-work">here</Link> .</p>
                <p>Applications, marked ‘Board Confidential’, can be emailed to info@borderlandsgrowth.com. </p>
                <p>The closing date for applications is Monday 2nd November, 2020. Shortlisted applicants will be invited for an interview by their relevant local authority.</p>
            </div>
        </Layout>
    );
};

export default News;