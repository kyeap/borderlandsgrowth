import React from "react";
import {chakra} from "@chakra-ui/react";

import Layout from "../components/Layout.js"

const DigitalStrategy = () => {

    return (
        <Layout>
            <div className="bannerText-container">
                <div className="bannerText-wrapper">
                    <div className="bannerText"> 
                        Digital Borderlands is a key component of the Borderlands Inclusive Growth Deal as an enabler of the broader programme as well as underpinning economic recovery and growth.
                    </div>
                </div>
            </div>
            <div className="container">
                <h1>Digital Borderlands Infrastructure Strategy</h1>
                <p>Recognising the importance of digital infrastructure in supporting our rural economy, the Borderlands Partnership Board has approved a strategy that sets out the ambition of the Borderlands Partners and the benefits to be realised from investment in full fibre and mobile infrastructure. Delivery of this strategy is therefore critical to the region, not just from a digital inclusion perspective, but also to allow people to live and work in a connected world.</p>
                <p>The COVID-19 crisis has reinforced the need for high quality digital connectivity for all. This strategy is therefore of paramount importance within the Borderlands Partnership as a springboard to recovery.</p>
                <p>The Digital Borderlands Infrastructure Strategy can be downloaded <chakra.a fontSize={18} href="../../BorderlandsDigitalStrategy.pdf" target="_blank">here.</chakra.a></p>
            </div>
        
        </Layout>
    );
};

export default DigitalStrategy;