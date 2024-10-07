import React from "react";
import './Top.css'
import IMPL from '../../assets/images/impl_logo.png'
import { useNavigate } from "react-router-dom";

export const Top = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/");
        setTimeout(() => {
            window.scrollTo(0, 0);
        }, 0);
    };

    return(
        <div className="top-container" >
            <div className="logo-box" onClick={goToMain}>
                <img src={IMPL} alt="impl"/>
                <h2>IMPL Lab</h2>
            </div>
            <button className="report-button">주간보고<i class="fa-solid fa-arrow-right-to-bracket"></i></button>
        </div>
    )
}