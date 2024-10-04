import React from "react";
import './Project.css'
import { List } from "./List/List";


export const Project = () => {

    return(
        <div className="project-container" id="project-section">
            {/* <div className="project-title">
                <p className="project-name">프로젝트/연구</p>
            </div> */}
            <div className="project-contents">
                <List></List>
            </div>
        </div>
    )
}