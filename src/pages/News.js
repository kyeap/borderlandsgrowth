import React, {useState} from "react";
import '../styles/main.css';
import {Table, Pagination} from "../components/Table.js";
import {tableList} from "../data/news";
import {FaRss } from 'react-icons/fa';

import Header from "../components/Header";
import Footer from "../components/Footer.js";

const News = () => {
    const [page, setPage] = useState(0);

    return (
        <>
            <Header/>
            {/* not using BannerText here as parse string contain HTML Tags */}
            <div className="bannerText-container">
                <div className="bannerText-wrapper">
                    <div className="bannerText"> 
                        All the latest <strong>News</strong> and <strong>Information</strong> on the Borderlands Inclusive Growth Deal
                    </div>
                </div>
            </div>
            <div className="container">
                { tableList[page].map((title) => {
                    console.log(title);
                    return (
                        <Table
                            text={title}
                        />
                    )
                }) }
                <Pagination
                    page = {page}
                    setPage = {setPage}
                />
                <div className="RRS">
                    <FaRss className="RSS-icon"/>
                    <a className="RSS-text" href="https://www.borderlandsgrowth.com/News/rss/424" target="_blank">RSS</a>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default News;