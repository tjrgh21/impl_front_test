import React from "react";
import './Layout.css'
import { Top } from "../Top/Top";
import { Banner } from "../Banner/Banner";
import { Bottom } from "../Bottom/Bottom";
import { TapBar } from "../TapBar/TapBar";

export const Layout = (
    {children, type}
) => {

    return(
        <div className="layout-container">
            <Top/>
            <Banner/>
            {
                type==="메인"
                ?
                null
                :
                <>
                    <TapBar/>
                </>
            }
            {children}
            <Bottom/>
            
        </div>
    )
}