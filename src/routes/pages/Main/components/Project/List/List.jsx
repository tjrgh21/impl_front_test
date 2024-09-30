import React from "react";
import './List.css'
import DSUimage from '../../../../../../assets/images/DSU_Banner.png'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";

export const imagesData = [
    { id: 1, category: '논문', title: '프로젝트명1', date: '2024-06-10', src: DSUimage },
    { id: 2, category: '특허', title: '프로젝트명2', date: '2024-06-25', src: 'image.png' },
    { id: 3, category: '공모전', title: '프로젝트명3', date: '2024-07-05', src: 'image.png', badge: true },
    { id: 4, category: '학술대회', title: '프로젝트명4', date: '2024-07-12', src: 'image.png' },
    { id: 5, category: '학술지', title: '프로젝트명5', date: '2024-07-16', src: 'image.png', badge: true },
    { id: 6, category: '논문', title: '프로젝트명6', date: '2024-07-27', src: 'image.png', badge: true },
    { id: 7, category: '특허', title: '프로젝트명7', date: '2024-08-08', src: 'image.png' },
    { id: 8, category: '공모전', title: '프로젝트명8', date: '2024-08-16', src: DSUimage },
    { id: 9, category: '학술대회', title: '프로젝트명9', date: '2024-08-30', src: 'image.png', badge: true },
    { id: 10, category: '학술대회', title: '프로젝트명10', date: '2024-08-31', src: DSUimage },
    { id: 11, category: '학술지', title: '프로젝트명11', date: '2024-09-05', src: DSUimage },
    { id: 12, category: '논문', title: '프로젝트명12', date: '2024-09-10', src: DSUimage, badge: true },
    { id: 13, category: '특허', title: '프로젝트명13', date: '2024-09-16', src: DSUimage },
    { id: 14, category: '공모전', title: '프로젝트명14', date: '2024-09-23', src: DSUimage },
    
    // 더 많은 이미지 추가 가능
];

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