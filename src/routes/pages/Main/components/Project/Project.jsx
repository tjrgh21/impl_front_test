import React from "react";
import './Project.css'
import { List } from "./List/List";
import { useProjectContext } from "../../../../../Context/ProjectContext";


export const Project = () => {
    const { imagesData } = useProjectContext();

    return(
        <div className="project-container" id="project-section">
            <div className="project-title">
                <p className="project-name">프로젝트/연구</p>
            </div>
            <div className="project-contents">
                <List dataList={imagesData} activeKey={'2'}/>
            </div>
        </div>
    )
}