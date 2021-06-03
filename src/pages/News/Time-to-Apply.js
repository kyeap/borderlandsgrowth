import React, {useState} from "react";
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
                <h1>There's still time to apply to Borderlands Economic Forum</h1>
                <p>The Borderlands Inclusive Growth Deal Economic Forum will be a central part of how the Growth Deal will be delivered, embedding the voice of businesses, third sector and regional strategic economic partners. It is a fantastic opportunity for individuals from the business community who are passionate about the place they live and work to contribute to the future of the Borderlands. The team are now seeking to recruit ten leading local business people from across the Borderlands to join the new Economic Forum.</p>
                <p>For more information, please download the information pack <Link to="How-we-work">here</Link> .</p>
                <p>The closing date for applications is Monday 2nd November, 2020. Shortlisted applicants will be invited for an interview by their relevant local authority.</p>
                <p>Applications, marked ‘Board Confidential’, can be emailed to info@borderlandsgrowth.com. </p>
            </div>
        </Layout>
    );
};

export default News;