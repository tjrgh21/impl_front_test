import React from "react";
import './SeminarList.css'
import { List } from "../Project/List/List";
import { useSeminarContext } from "../../../../../Context/SeminarContext";


export const SeminarList = () => {
    const { SeminarsData } = useSeminarContext();

    return(
        <div className="seminarlist-container">
            <div className="seminarlist-title">
                <p className="seminarlist-name">세미나</p>
            </div>
            <div className="seminarlist-contents">
                <List dataList={SeminarsData} activeKey="5" />
            </div>
        </div>
    )
}