import React, {useState} from "react";
import "../styles/dropdownCard.css";


const DropdownCard = (props) => {
    const {date, title, text = "", download = "", link } = props;
    const [dropdown, setDropdown] = useState(false);

    return (
        <div className="dropdowncard-container">
            <div className="title-container">
                <div className="card-title"> {title} </div>
                <div className="card-dropdown-plus" onClick={() => setDropdown(prevState => !prevState)}>
                 + 
                </div>
            </div>
            <div id={title} className="dropdown-container" style={{ height: dropdown? "auto" : "0px", display: dropdown? "block":"none"}}>
                <div>{date}</div>
                <div>{title}</div>
                {text != "" && <div>{text}</div>}
                {download != "" && 
                    <div className="download-container">
                        <div>Documents to download</div>
                        <div>{download}</div>
                    </div>
                }
                <button><a href={link}>READ MORE</a></button>    
            </div>
                 
        </div>
    )
}

export default DropdownCard;