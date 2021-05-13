import React, {useState} from "react";
import '../styles/table.css';

export const Pagination = (props) => {
    const {setPage} = props;
    return (
        <> 
            <div className="pagination">
                <div className="paginationCell" onClick={()=>setPage(0)}>1</div>
                <div className="paginationCell" onClick={()=>setPage(1)}>2</div>
                <div className="paginationCell" onClick={()=>setPage(2)}>3</div>
            </div>
        </>
    )
}

export const Table = (props) => {
    const {title, textArr} = props;
    const [toggle, setToggle] = useState(false);
    return (
        <>
            <div className="container-table">
                <div className="container-table-title">
                    <div className="cell1">{title}</div>
                    <div className="cell2" onClick={()=>setToggle(prevState=>!prevState)}>+</div>
                </div>
                <div className="container-subtable" style={{display:toggle? "block":"none"}}>
                    {textArr.map((text)=> {
                        return (
                            <p>{text}</p>
                        );
                    })}
                </div>
                <div className="container-table-bottom">READ MORE</div>
            </div>
        </>
    )
}
