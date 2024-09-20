import React from "react";
import './List.css'
import DSUimage from '../../../../../../assets/images/DSU_Banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

const dummy = [
    {
        src: DSUimage
    },
    {
        src: DSUimage
    },
    {
        src: DSUimage
    },
    {
        src: DSUimage
    },
    
]

export const List = () => {
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
        navigate("/info", { state: { activeKey: '2' } })
    }

    return (
        <div className="list-container" onClick={goToInfo}>
            <Slider {...settings}>
                {dummy.map((data, index) => (
                    <div key={index} className="list-contents">
                        <img className="list-img" src={data.src} alt={`slide-${index}`} />
                    </div>
                ))}
            </Slider>
        </div>
    )
}