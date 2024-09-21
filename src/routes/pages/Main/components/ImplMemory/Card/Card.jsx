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
    // 더 많은 이미지 추가 가능
];

export const Card = () => {
    const navigate = useNavigate();

    const goToInfo = () => {
        navigate('/info', { state: { activeKey: '3' } })
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
