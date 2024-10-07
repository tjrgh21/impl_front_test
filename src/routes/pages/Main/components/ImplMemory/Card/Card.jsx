import React from 'react';
import './Card.css';
import { useNavigate } from 'react-router-dom';
import { useMemoryContext } from '../../../../../../Context/MemoryContext';

export const Card = () => {
    
    const { MemoryImagesData } = useMemoryContext();
    const reversedImages = [...MemoryImagesData].slice(-4).reverse();
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
                        reversedImages.map((data, index) => {
                            return (
                                <div className="card-items" key={index}>
                                    <img className="card-img" src={data.imageUrl} alt="" />
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
