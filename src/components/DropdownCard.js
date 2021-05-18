import React, {useState} from "react";
import "../styles/dropdownCard.css";
import { useSpring, animated } from "react-spring";


const DropdownCard = (props) => {
    const {date, title, text = "", download = "", link } = props;
    const [dropdown, setDropdown] = useState(false);

    const motion = useSpring({ 
        to: { opacity: dropdown? 1:0, height: dropdown? 100 : 0 }, 
        from: { opacity: dropdown? 0:1, height: dropdown? 0 : 100 },
        reset: true,
    });

    return (
        <div className="dropdowncard-container">
            <div className="title-container">
                <div className="card-title"> {title} </div>
                <div className="card-dropdown-plus" onClick={() => setDropdown(prevState => !prevState)}>
                 + 
                </div>
            </div>
            <animated.div style={motion} id={title} >
                {/* <div id={title} className="dropdown-container" style={{ height: dropdown? "auto" : "0px", display: dropdown? "block":"none"}}> */}
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
                {/* </div> */}
            </animated.div>
        </div>
    )
}

export default DropdownCard;