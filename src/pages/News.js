import React, {useState} from "react";
import {Table, Pagination} from "../components/Table.js";
import {tableList} from "../data/news";
import {FaRss } from 'react-icons/fa';
import {detect} from 'detect-browser';

import Layout from "../components/Layout.js"
import {AccordionNews} from "../components/Accordion.js";
import {Accordion} from "@chakra-ui/accordion";
import PaginationBlock from "../components/Pagination";
import 'react-app-polyfill/ie11';

const News = () => {
    const [page, setPage] = useState(0);
    const browser = detect();

    return (
        <Layout>
            {browser && browser.name == "ie" && <div>Internet explore is not supported for this page, please upgrade your browser.</div>}
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
                    <PaginationBlock
                        data={tableList}
                    />
                    {/* { tableList[page].map((news) => {
                        console.log(news.title);
                        return (         
                            <AccordionNews
                            title={news.title}
                            textArr={news.textArr}
                            />
                        )
                    })} */}
                </Accordion>
                <div className="RRS">
                    <FaRss className="RSS-icon"/>
                    <a className="RSS-text" href="https://www.borderlandsgrowth.com/News/rss/424" target="_blank" role="presentation">RSS</a>
                </div>
                {/* <Pagination
                    page = {page}
                    setPage = {setPage}
                /> */}
            </div>
        </Layout>
    );
};

export default News;