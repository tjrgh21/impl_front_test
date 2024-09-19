import React from 'react';
import './TapBar.css';

export const TapBar = ({ activeKey, onTabClick }) => {
    return (
        <div className="tapbar-container">
            <ul className="category">
                <li><button onClick={() => onTabClick('1')} className={activeKey === '1' ? 'active' : ''}><span>연구실 소개</span></button></li>
                <li><button onClick={() => onTabClick('2')} className={activeKey === '2' ? 'active' : ''}><span>프로젝트/연구</span></button></li>
                <li><button onClick={() => onTabClick('3')} className={activeKey === '3' ? 'active' : ''}><span>임플의 추억</span></button></li>
                <li><button onClick={() => onTabClick('4')} className={activeKey === '4' ? 'active' : ''}><span>교수님 소개</span></button></li>
            </ul>
        </div>
    );
};
