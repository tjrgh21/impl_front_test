import React from "react";
import './Top.css'
import IMPL from '../../assets/images/impl_logo.png'
import { useNavigate } from "react-router-dom";

export const Top = () => {
    const navigate = useNavigate();

    const goToMain = () => {
        navigate("/")
    }

    return(
        <div className="top-container"
            onClick={goToMain}
        >
            <img src={IMPL} alt="impl"/>
            <h2>IMPL 연구실</h2>
        </div>
    )
}