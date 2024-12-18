import React from "react";
import './Banner.css'
import DSUImage from '../../assets/images/DSU_Banner.png'
import { Link } from 'react-scroll';

export const Banner = () =>{
    return(
        <div className="banner-container">
            <img src={DSUImage} alt="DSU" />
            
            <div className="banner-notice">
                <h3>열정으로 도전하고, 다양한 분야에 도전하는<br /> IMPL 연구실입니다.</h3>
            </div>
            {/* <div className="banner-buttons">
                <Link to="project-section" smooth={true} duration={500}>
                    <button className="scroll-button">둘러보기</button>
                </Link>

                <button className="default-button">주간보고</button>
            </div> */}
        </div>
    )
}