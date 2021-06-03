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
                <h1>The Borderlands Initiative to be included in the UK government’s budget statement</h1>
                <h2>With Scottish Government support, this project overcomes political and cross-border differences to provide tremendous opportunities for the area’s future economic stability
                </h2>
                <p>Earlier this year a formal proposition was submitted to the UK and Scottish governments for consideration, focusing on the factors which make the area attractive to investors, visitors and those who wish to relocate. It also seeks to tackle the need for population growth and improved productivity.</p>
                
                <h2>A Borderlands Initiative spokesperson said:</h2>
                <p>““Our shared ambition is to play our full part in the regional and wider UK economy and unlock the potential of the south of Scotland and north of England. Discussions with both governments have been positive and we welcome the inclusion of the Borderlands Initiative in the Chancellor’s budget statement, which now marks the start of the next stage in the process. The Initiative remains at a relatively early stage, but we look forward to ongoing collaboration and discussion with both governments, with a view to securing agreement as soon as possible.”</p>
                <p>The Borderlands Initiative is focusing on several key themes, including: digital technology; innovation; low carbon; and energy. The approach is based on existing physical and infrastructure connections, and transport and connectivity are at the heart of the partners’ proposals, linking the opportunities that can be created and informing future projects.
                </p>
                <p>The detail of the partners’ proposals to the UK and Scottish governments is confidential and therefore further detail cannot be released at this time.</p>


                <h2>Additional quotes:</h2>
                <h2>Leader of Carlisle City Council, Cllr Colin Glover, said:</h2>
                <p>“The Borderlands Initiative is a shared ambition that recognises the potential for growth within our region. Carlisle is a growing city and working with local authority partners, we want to play our part. We want to drive forward projects that will make Carlisle the beating heart of the Borderlands. We’re an ambitious city that wants to provide the best platform for growth and future investment.”</p>
                
                <h2>Elaine Murray, Leader of Dumfries and Galloway Council said:</h2>
                <p>“Building the local economy is one of our Council’s top priorities but brings with it some real challenges due to the rural nature of our region, which is why we are seizing this opportunity to work together with our neighbouring Local Authorities from both sides of the Border to promote and encourage investment and innovation in our area to deliver transformative change across the region.</p>
                <p>“Through this ambitious and unique partnership we will be able to develop a range of projects, some cutting across several councils, others specific to our area. The Borderlands initiative will not only increase our lobbying powers at both the Westminster and Scottish Government’s but will also act as a mechanism for leveraging additional public and private sector investment and resources to drive long term growth our region.”</p>

                <h2>Peter Jackson, Leader of Northumberland County Council said:</h2>
                <p>“We’re delighted this cross-border initiative has been announced in the government’s budget statement. As a council we have been working hard with our partners in other local authorities on both sides of the border to bring this initiative together. This will allow the region to unlock the huge potential for growth that exists within the Borderlands area and drive forward economic development. This is an exciting opportunity to breathe new life into many of our communities and create new opportunities for the future."</p>
                
                <h2>Councillor Shona Haslam, Leader of Scottish Borders Council, said:</h2>
                <p>“Sustainable economic growth and encouraging more people to visit, live and work are shared objectives for all the Borderlands partners, and today’s announcement is an important next step towards achieving potentially significant funding for the region. For the Scottish Borders, the Borderlands Initiative, the Edinburgh and South East Scotland City Region Deal and the development of the South of Scotland Enterprise Agency can all help to support and drive inclusive growth, investment and improved infrastructure.”</p>
            </div>
        </Layout>
    );
};

export default News;