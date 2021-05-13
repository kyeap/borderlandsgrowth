import React from "react";

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