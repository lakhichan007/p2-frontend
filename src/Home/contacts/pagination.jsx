import React from "react";
import "./contacts.css"
const Pagination=({contactspergage,totalcontacts,paginate})=>{
 let pagenumber=[]
 for(let i=1;i<Math.ceil(totalcontacts/contactspergage);i++){
    pagenumber.push(i)
 }

    return(
        <>
        
        <div id="pagination-container">
            <div>Page No.-</div>
        {pagenumber.map((page=>{
            return(
            <div id="pagination-box" key={page}>
                <button id="pagination-btn" onClick={()=>{paginate(page)}} >
                {page}
                </button>
                
            </div>
            )
        }))}
        </div>
        </>
    )
}
export default Pagination