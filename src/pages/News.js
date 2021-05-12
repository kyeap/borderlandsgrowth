import React from "react";
import '../styles/main.css';
import {Table, Pagination} from "../components/Table.js";
import {tableList} from "../data/news";

import Header from "../components/Header";
import Footer from "../components/Footer.js";

const News = () => {
    return (
        <>
            <Header/>
            <div className="bannerText">All the latest <strong>News</strong> and <strong>Information</strong> on the Borderlands Inclusive Growth Deal</div>
            <div className="container">
                { tableList.map((title) => {
                    console.log(title);
                    return (
                        <Table
                            text={title}
                        />
                    )
                }) }
                <Pagination/>
                <div>
                    <a href="https://www.borderlandsgrowth.com/News/rss/424" target="_blank"><span>RSS</span></a>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default News;