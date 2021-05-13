import React from "react";

const BannerText = (props) => {
    const {textStrong="", text} = props;
    const newText = new DOMParser().parseFromString(text, "application/xml");
    return (
        <>
        <div className="bannerText-container">
            <div className="bannerText-wrapper">
                <div className="bannerText"> 
                    <strong> {textStrong} </strong>
                    {newText}
                </div>
            </div>
        </div>
        </>
    );
};

export default BannerText;