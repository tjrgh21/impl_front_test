import React from 'react';
import './Card.css';
import DSUimage from '../../../../../../assets/images/DSU_Banner.png'
import { useNavigate } from 'react-router-dom';

export const MemoryimagesData = [
    { id: 1, title: '임플의 추억1', date: '2024-06-10', src: DSUimage },
    { id: 2, title: '임플의 추억2', date: '2024-06-25', src: DSUimage },
    { id: 3, title: '임플의 추억3', date: '2024-07-05', src: DSUimage },
    { id: 4, title: '임플의 추억4', date: '2024-07-12', src: DSUimage },
    { id: 5, title: '임플의 추억5', date: '2024-07-16', src: DSUimage },
    { id: 6, title: '임플의 추억6', date: '2024-07-27', src: 'image.png' },
    { id: 7, title: '임플의 추억7', date: '2024-07-29', src: DSUimage },
    { id: 8, title: '임플의 추억8', date: '2024-08-01', src: DSUimage },
    { id: 9, title: '임플의 추억9', date: '2024-08-05', src: DSUimage },
    { id: 10, title: '임플의 추억10', date: '2024-08-19', src: DSUimage },
    { id: 11, title: '임플의 추억11', date: '2024-08-25', src: DSUimage },
    { id: 12, title: '임플의 추억12', date: '2024-09-09', src: DSUimage },
    { id: 13, title: '임플의 추억13', date: '2024-09-16', src: DSUimage },
    { id: 14, title: '임플의 추억14', date: '2024-09-20', src: DSUimage },
    // 더 많은 이미지 추가 가능
];

export const Card = () => {
    const navigate = useNavigate();

    const goToInfo = () => {
        navigate('/info', { state: { activeKey: '3' } })
        setTimeout(() => {
            window.scrollTo(0, 495);  // 원하는 스크롤 위치로 이동 (500은 예시)
        }, 0); 
    }

    return (
        <div className="card-container" onClick={goToInfo}>
            <div className="card-contents">
                    {
                        MemoryimagesData.slice(-4).reverse().map((data, index) => {
                            return (
                                <div className="card-items">
                                    <img className="card-img" src={data.src} alt="" key={index} />
                                    <div className="card-notice">
                                        <span className='card-title'>{data.title}</span>
                                        <span className='card-date'>{data.date}</span>
                                        <span className='card-description'>{data.description}</span>
                                    </div>
                                </div>
                                
                            )
                        })
                    }
                </div>
        </div>
    );
};
