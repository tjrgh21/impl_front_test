import React from "react";
import './Top.css'
import IMPL from '../../assets/images/impl_logo.png'

export const Top = () => {
    return(
        <div className="top-container">
            <img src={IMPL} alt="impl"/>
            <h2>IMPL 연구실</h2>
        </div>
    )
}