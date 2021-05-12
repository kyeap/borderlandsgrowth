import React, {useState} from "react";
import "../styles/dropdownCard.css";

const DropdownCard = (props) => {
    const {date, title, text = "", download = "", link } = props;
    const [dropdown, setDropdown] = useState(false);
    return (
        <div className="dropdowncard-container">
            <div className="title-container">
                <div className="card-title"> {title} </div>
                <div className="card-dropdown-plus" onClick={()=>setDropdown(x=>!x)}> + </div>
            </div>
            { dropdown &&
                <>
                    <div className="dropdown-container">
                        <div>{date}</div>
                        <div>{title}</div>
                        {text != "" && <div>{text}</div>}
                        {download != "" && 
                            <div className="download-container">
                                <div>Documents to download</div>
                                <div>{download}</div>
                            </div>
                        }
                    </div>
                    <button><a href={link}>READ MORE</a></button>
                </>
            }            
        </div>
    )
}

export default DropdownCard;