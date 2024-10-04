import React, { useState, useEffect } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import { Title } from '../../../components/Title/Title';
import { LabIntro, LabProjects, LabMemories, ProfessorProfile, Seminar } from './components/AboutLab';
import { useLocation, useNavigate } from 'react-router-dom';

const items = [
    { key: '1', label: '연구실 소개', children: <LabIntro/> },
    { key: '2', label: '프로젝트/연구', children: <LabProjects/> },
    { key: '3', label: '임플의 추억', children: <LabMemories/> },
    { key: '4', label: '교수님 소개', children: <ProfessorProfile/> },
    { key: '5', label: '세미나', children: <Seminar/> },
];

const InfoPresenter = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const initialKey = location.state?.activeKey || localStorage.getItem('activeKey') || '1';

    const [activeKey, setActiveKey] = useState(initialKey);

    // activeKey가 변경될 때마다 localStorage에 저장
    useEffect(() => {
        if (!location.state?.activeKey) {
            localStorage.setItem('activeKey', activeKey);
        }
    }, [activeKey]);

    useEffect(() => {
        if (location.state?.activeKey) {
            navigate(location.pathname, { replace: true });
        }
    }, [location, navigate]);

    const handleTabChange = (key) => {
        setActiveKey(key); // 선택된 key값으로 상태 변경
    };

    const currentTabContent = items.find(item => item.key === activeKey)?.children;
    const currentTitle = items.find(item => item.key === activeKey)?.label;

    const titleType = activeKey === '4' ? 'none' : null;

    return (
        <div className="main-container">
            <Layout
                type={"tap"}
                activeKey={activeKey}
                onTabChange={handleTabChange}
                children={
                    <div className="main-content">
                        <Title title_name={currentTitle} type={titleType} />
                        <div className="tab-content">
                            <p>{currentTabContent}</p>
                        </div>
                    </div>
                }
            />
        </div>
    );
};

export default InfoPresenter;