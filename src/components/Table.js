import React from "react";
import '../styles/table.css';

export const Pagination = () => {
    return (
        <> 
            <div className="pagination">
            <div className="paginationCell">1</div>
            <div className="paginationCell">2</div>
            <div className="paginationCell">3</div>
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
