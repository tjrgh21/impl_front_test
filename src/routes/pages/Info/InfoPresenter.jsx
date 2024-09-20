import React, { useState } from 'react';
import { Layout } from '../../../components/Layout/Layout';
import { Title } from '../../../components/Title/Title';
import { LabIntro, LabProjects, LabMemories, ProfessorProfile } from './components/AboutLab';


const items = [
    { key: '1', label: '연구실 소개', children: <LabIntro/> },
    { key: '2', label: '프로젝트/연구', children: <LabProjects/> },
    { key: '3', label: '임플의 추억', children: <LabMemories/> },
    { key: '4', label: '교수님 소개', children: <ProfessorProfile/> },
];

const InfoPresenter = () => {
    const [activeKey, setActiveKey] = useState('1'); // 기본적으로 첫 번째 탭을 선택

    const handleTabChange = (key) => {
        setActiveKey(key); // 선택된 key값으로 상태 변경
    };

    // 현재 선택된 activeKey에 맞는 label과 content를 찾음
    const currentTabContent = items.find(item => item.key === activeKey)?.children;
    const currentTitle = items.find(item => item.key === activeKey)?.label;

    // key가 '4'일 경우 type을 'none'으로 설정
    const titleType = activeKey === '4' ? 'none' : null; // 기본값을 'line'으로 설정

    return (
        <div className="main-container">
            <Layout
                type={"tap"}
                activeKey={activeKey}         // activeKey를 Layout에 전달
                onTabChange={handleTabChange}  // handleTabChange를 Layout에 전달
                children={
                    <div className="main-content">
                        {/* activeKey에 맞는 label과 type 값을 title_name과 type으로 전달 */}
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
