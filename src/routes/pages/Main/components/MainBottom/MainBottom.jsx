import React from "react";
import './MainBottom.css'
import RightArrow from '../../../../../assets/images/right-arrow.png'
import { useNavigate } from "react-router-dom";

export const MainBottom = () => {
    const navigate = useNavigate();
    const goToInfo = () => {
        navigate('/info', { state: { activeKey: '4' } });
        setTimeout(() => {
            window.scrollTo(0, 495);  // 원하는 스크롤 위치로 이동 (500은 예시)
        }, 0);
    }

    return(
        <div className="mainbottom-container">
            <div className="mainbottom-professor" onClick={goToInfo}>
                <div className="mainbottom-professor-introduce">
                    <span className="mainbottom-span1">교수님 소개</span><br />
                    <span className="mainbottom-span2">IMPL연구실의 교수님을 소개합니다. </span>
                </div>
                <div className="mainbottom-arrow">
                    <img className="right-arrow" src={RightArrow} alt="right-arrow" />
                </div>
            </div>
            <div className="mainbottom-researcher">
                <div className="mainbottom-researcher-introduce">
                    <span className="mainbottom-span3">소속 연구원</span><br />
                    <span className="mainbottom-span4">IMPL연구실의 연구원을 소개합니다.</span>
                </div>
                <div className="mainbottom-arrow">
                    <img className="right-arrow" src={RightArrow} alt="right-arrow" />
                </div>
            </div>
        </div>
    )
}