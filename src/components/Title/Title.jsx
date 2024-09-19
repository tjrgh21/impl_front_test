import React from "react";
import './Title.css';


export const Title = (
    {title_name, type}
) => {
    return(
        <div className="title-container">
            {
            type==="none"
            ?
            <div className="title-nav-none">
                <h1>{title_name}</h1>
            </div>
            :
            <div className="title-nav-line">
                <h1>{title_name}</h1>
            </div>
            }
        </div>
        
    )
}
