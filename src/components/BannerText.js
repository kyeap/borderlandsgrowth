import React from "react";
import "../styles/BannerText.css";

const BannerText = (props) => {
    const {textStrong="", text} = props;
    return (
        <>
        <div className="bannerText-container">
            <div className="bannerText-wrapper">
                <div className="bannerText"> 
                    <strong> {textStrong} </strong>
                    {text}
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerText;