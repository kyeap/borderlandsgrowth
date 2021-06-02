import React, {useState, useEffect} from "react";
import {AccordionNews} from "../components/Accordion.js";
import '../styles/table.css';

// component will get a set of data and return segments of that data 
const PaginationBlock = (props) => {
    const {data=[], itemsPerPage=10} = props;
    const [page, setPage] = useState(0); //array starts from 0
    const [arrPage, setArrPage] = useState([]); 
    const pageNum = Math.floor(data.length/itemsPerPage);
    const arrLength = new Array([0]);
    
    useEffect(() => {
        //calculate pages needed and update array 
        const startIndex = page*itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setArrPage(data.slice(startIndex, endIndex));
    }, [data,page])

    let n = 0;
    while (n<pageNum) {
        arrLength.push(n);
        n++;
    }

    return (
        <>
            { arrPage.map((news) => {
                console.log(news);
                return (         
                    <AccordionNews
                        title={news.title}
                        textArr={news.textArr}
                        downloadPath={news.downloadPath}
                        link={news.link}
                    />
                )
            })}
            <div className="pagination">
                { arrLength.map((ele,index) => {
                    console.log(index);
                    return (
                        <button className="paginationCell" onClick={()=>setPage(index)}>{index+1}</button>
                    )
                })}
            </div>
        </>
    )


}

export default PaginationBlock;