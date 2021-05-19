import React, {useState} from "react";
import {Table, Pagination} from "../components/Table.js";
import {tableList} from "../data/news";
import {FaRss } from 'react-icons/fa';

import Layout from "../components/Layout.js"
import {AccordionNews} from "../components/Accordion.js";
import {Accordion} from "@chakra-ui/accordion";

const News = () => {
    const [page, setPage] = useState(0);

    return (
        <Layout>
            {/* not using BannerText here as parse string contain HTML Tags */}
            <div className="bannerText-container">
                <div className="bannerText-wrapper">
                    <div className="bannerText"> 
                        All the latest <strong>News</strong> and <strong>Information</strong> on the Borderlands Inclusive Growth Deal
                    </div>
                </div>
            </div>
            <div className="container">
                <Accordion allowMultiple>
                    { tableList[page].map((news) => {
                        console.log(news.title);
                        return (         
                            <AccordionNews
                            title={news.title}
                            textArr={news.textArr}
                            />
                        )
                    })}
                </Accordion>
                <div className="RRS">
                    <FaRss className="RSS-icon"/>
                    <a className="RSS-text" href="https://www.borderlandsgrowth.com/News/rss/424" target="_blank">RSS</a>
                </div>
                <Pagination
                    page = {page}
                    setPage = {setPage}
                />
            </div>
        </Layout>
    );
};

export default News;