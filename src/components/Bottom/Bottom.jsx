import React from "react";
import './Bottom.css'
import KAKAOImage from '../../assets/images/kakao.png'
import PHONEImage from '../../assets/images/phone.png'

export const Bottom = () => {
    return(
        <div className="bottom-container">
            <div className="bottom-up">
                <h2>IMPL 연구실</h2>
            </div>

            <div className="bottom-down">
                <div className="bottom-down-text">
                    <p>부산광역시 사상구 주례로 47 동서대학교 뉴밀레니엄관 1004호 &nbsp; TEL : 051-320-4228 &nbsp; 지도교수 : 최봉준 교수</p>
                    <p>E-mail : bongjun.choi@dongseo.ac.kr</p>
                </div>
                <div className="botoom-down-icon">
                    <a href="/main">
                        <img src={KAKAOImage} alt="kakao" />
                    </a>
                    <a href="/main">
                        <img src={PHONEImage} alt="phone" />
                    </a>
                </div>
            </div>
        </div>
    )
}