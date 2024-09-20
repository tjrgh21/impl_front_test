import React from "react";
import './ImplMemory.css'
import { Card } from "./Card/Card";


export const ImplMemory = () => {

    return(
        <div className="impl-memory-container">
            <div className="impl-memory-title">
                <p className="impl-memory-name">임플의 추억</p>
            </div>
            <div className="impl-memory-content">
                <Card></Card>
            </div>
        </div>
    )
}