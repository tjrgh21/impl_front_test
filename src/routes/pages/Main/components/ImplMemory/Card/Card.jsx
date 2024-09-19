import React from 'react';
import './Card.css';
import DSUimage from '../../../../../../assets/images/DSU_Banner.png'

const dummy = [
    {
        src: DSUimage,
        date: '2024-08-26 회식',
        title: 'IMPL의 추억',
        description: '삼겹살과 소주',
        
    },
    {
        src: DSUimage,
        date: '2024-08-11 회식',
        title: 'IMPL의 추억',
        description: '복판통닭에서 한 잔',
    },
    {
        src: DSUimage,
        date: '2024-08-02 회식',
        title: 'IMPL의 추억',
        description: '맘스터치',
    },
    {
        src: DSUimage,
        date: '2024-09-12 회식',
        title: 'IMPL의 추억',
        description: '젤리',
    },
]

export const Card = () => {
  return (
    <div className="card-container">
        <div className="card-contents">
                {
                    dummy.map((data, index) => {
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
