import React from 'react';
import './Layout.css';
import { Top } from '../Top/Top';
import { Banner } from '../Banner/Banner';
import { Bottom } from '../Bottom/Bottom';
import { TapBar } from '../TapBar/TapBar';

export const Layout = ({ children, activeKey, onTabChange,type }) => {
    return (
        <div className="layout-container">
            <Top />
            <Banner />
            {/* TapBar에 activeKey와 onTabChange를 전달 */}
            {type==="tap"
            ?
            <TapBar activeKey={activeKey} onTabClick={onTabChange} />
            :null
            }
            {children}
            <Bottom />
        </div>
    );
};
