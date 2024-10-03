import React from "react";
import './List.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { useProjectContext } from "../../../../../../Context/ProjectContext";


export const List = () => {
    const { imagesData } = useProjectContext();

    const settings = {
        dots: false, // 하단에 점 내비게이션 표시
        infinite: true, // 무한 반복
        speed: 700, // 슬라이드 전환 속도(ms)
        slidesToShow: 4, // 화면에 보여지는 슬라이드 개수
        slidesToScroll: 1, // 한 번에 넘어가는 슬라이드 개수
        autoplay: true, // 자동 재생 활성화
        autoplaySpeed: 3000, // 자동 재생 속도(ms)
        
    };

    const navigate = useNavigate();

    const goToInfo = () => {
        navigate("/info", { state: { activeKey: '2' } });
        setTimeout(() => {
            window.scrollTo(0, 495);  // 원하는 스크롤 위치로 이동 (500은 예시)
        }, 0); 
    }

        return (
            <div className="list-container" onClick={goToInfo}>
                <Slider {...settings}>
                    {imagesData.slice().reverse().map((data, index) => (
                        <div key={index} className="list-contents">
                            <img className="list-img" src={data.src} alt={`slide-${index}`} />
                        </div>
                    ))}
                </Slider>
            </div>
    )
}