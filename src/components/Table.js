import React from "react";
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
    const {text} = props;
    return (
        <>
            <div className="container-table">
                <div className="cell1">{text}</div>
                <div className="cell2">+</div>
            </div>
        </>
    )
}
