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
                <chakra.h1 color="blue">Ministerial Visit 18 January</chakra.h1>
                <chakra.h2 color="blue">A meeting to discuss the Borderlands Inclusive Growth Deal was held in Carlisle - Thursday 18 January.</chakra.h2>
                <p>This was the first meeting with UK Government Ministers since the UK Chancellor committed to opening negotiations on a Growth Deal for the area in the 2017 Budget.</p>
                
                <chakra.h2 color="blue">A Borderlands spokesperson said:</chakra.h2>
                <p>“Our shared ambition is to play our full part in the regional and wider UK economy and unlock the potential of the south of Scotland and north of England. We welcomed the opportunity to discuss the Borderlands Growth Deal direct with Ministers. Discussions were positive and although they remain at a relatively early stage we look forward to more collaboration and discussion with both the UK and Scottish governments.”</p>
                
                <chakra.h2 color="blue">Scottish Secretary David Mundell added:</chakra.h2>
                <p>“We are continuing to make good progress towards a Borderlands Growth Deal, which has the potential to transform the economy of the whole region, creating jobs and increasing prosperity. We had a productive meeting today with the five Borderlands local authority partners. I was impressed with their enthusiasm for, and the energy behind, creating a transformative deal.  We will continue to work closely with the Borderlands partners to work up the detail of their proposals.</p>
                
                <chakra.h2 color="blue">Northern Powerhouse and Local Growth Minister Jake Berry said:</chakra.h2>
                <p>“I'm delighted that we've fired the starting gun today on this hugely exciting coast to coast Borderlands Growth Deal-something that will be unique in the UK. I am looking forward to us continuing today's progress working with the Borderlands councils and the Scottish Government in the coming months on developing an ambitious sector led deal that will encourage growth and productivity to create thriving local economies both sides of the border."</p>
                <p>The Borderlands partnership brought together the five cross-border local authorities of Carlisle City Council, Cumbria County Council, Dumfries & Galloway Council, Northumberland County Council and Scottish Borders Council to promote the economic growth and competitiveness of an area that straddles the Scotland-England border.</p>
                <p>Last year a formal proposition was submitted to the UK and Scottish governments for consideration, focusing on the factors which make the area attractive to investors, visitors and those who wish to relocate. It also aimed to tackle the need for population growth and improved productivity.</p>
                <p>The proposition focussed on several key themes, including: digital technology; innovation; low carbon; and energy. The approach is based on existing physical and infrastructure connections, and transport and connectivity are at the heart of the partners’ proposals, linking the opportunities that can be created and informing future projects</p>
            </div>
        </Layout>
    );
};

export default News;