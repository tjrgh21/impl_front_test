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
            <img src={IMPL} alt="impl" onClick={goToMain}/>
            <h2 onClick={goToMain}>IMPL Lab</h2>
        </div>
    )
}