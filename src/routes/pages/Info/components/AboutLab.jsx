import React, { useState } from "react";
import './AboutLab.css';
import ProfessorImg from '../../../../assets/images/professor.jpg'
import DSUimage from '../../../../../src/assets/images/DSU_Banner.png'


const InfoBox = ({ label, data }) => {
    return (
        <div className="info-box">
            <div className="label-container">
                <div className="blue-square"></div>
                <h2 className="info-box-label">{label}</h2>
            </div>
            {data && data.length > 0 && data.map((item, index) => (
                <div key={index}>
                    {item.text && Array.isArray(item.text) ? (
                        item.text.map((textItem, textIndex) => (
                            <p key={textIndex} className="info-box-text">{textItem}</p>
                        ))
                    ) : (
                        <p className="info-box-text">{item.text}</p>
                    )}

                    {/* 삼항 연산자로 images가 있는 경우와 없는 경우 처리 */}
                    {item.images && item.images.length > 0 ? (
                        <div className="image-container">
                            {item.images.map((src, imgIndex) => (
                                <img key={imgIndex} src={src} alt={`info-${label}-${index}-${imgIndex}`} className="info-box-image" />
                            ))}
                        </div>
                    ) : null}
                </div>
            ))}
        </div>
    );
};


export const LabIntro = () => {
    return(
        <div className="aboutlab-container">
            <div className="intro-container">
                <div className="intro-title"><h2>IMPL(Implementation) 연구실</h2></div>
                <div className="info-container">
                    <InfoBox
                    label={"지도교수"}
                    data={[
                        {
                            text:"최봉준 교수님"
                        }
                    ]}
                    />
                    <InfoBox
                    label={"연구실"}
                    data={[
                        {
                            text:"NM관 1004호"
                        }
                    ]}
                    />
                    <InfoBox
                    label={"연구실 소개"}
                    data={[
                        {
                            text:[
                                "IMPL 연구회는 Implementation 의 줄임말로, 아이디어를 구현하고 실행하는 뜻을 가지고 있습니다.",
                                "더불어, 'I’m Project Leader'라는 뜻을 함축하고 있어, 주도적인 역할을 하게 되어 성장하는 것을 목표로 하고 있습니다.",
                                "IMPL 연구회는 교수님 지도 아래 인공지능, 데이터 분석, 기본적인 프로그래밍 능력을 기반으로 다양한 프로젝트를 통해 이를 활용하고자 합니다.",
                                "‘고민은 고(Go) 이후에’라는 IMPL 연구회의 모토를 통해 고민하는 것이 중요하지만, 그것을 실행으로 이어지는 것이 더 중요하다고 생각하며, 고민으로만 머무르지 않고, 실제 행동으로 옮기며 성장하고 있습니다.",
                                "무엇을 할 수 있을까 하는 고민보다는 무엇을 할 수 있다 라는 생각으로 행동으로 옮겨 이를 구현하며 성장하고 있습니다.",
                                "이를 통해 IMPL 연구회는 팀 프로젝트를 통해 학생들 간의 협업을 촉진하고, 서로의 강점을 발휘할 뿐만 아니라 개인의 능력을 존중하면서 선후배의 경계없이 협력과 공동의 목표를 달성함으로써 단합력 향상뿐만 아니라 재밌고 밝은 분위기를 형성하여 연구하는 연구회입니다.",
                                "또한, IMPL 연구회는 빅데이터와 인공지능을 다양한 전공에 접목하여 보다 효율적인 시스템을 완성하는 가치를 중요시하며, 창업, 학술, 개발 등 다양한 진로 방향을 설계하고 이에 맞는 프로그램을 참여함으로써 개개인의 역량을 키울 수 있는 기회를 제공합니다."
                            ]
                        }
                    ]}
                    
                    />
                    <InfoBox
                    label={"연구활동"}
                    data={[
                        {
                            text:[
                                "· 국내/국제 논문 작성",
                                "· 개발 프로젝트",
                                "- 기초 웹 개발 프로젝트",
                                "- 외주 프로젝트",
                                "· 매주 연구회 미팅을 통해 개인 프로젝트 주간 보고",
                                "· 선후배 멘토 멘티 활동",
                            ]
                        }
                    ]}
                    
                    />
                    <InfoBox
                    label={"개발 내용"}
                    data={[
                        {
                            text:[
                                "- 사용자 의류 기반 패션 스타일 유사도 측정 및 분류 시스템",
                                "→ 사용자가 희망하는 코디 스타일 입력 시 소유하고 있는 의류를 기반으로 인공지능 모델을 활용하여 유사도를 측정하고 분류하는 시스템 연구",
                            ],
                            images:["info_1.png"]
                        },
                        {
                            text: [
                                "- 뉴스 기사 동향 분석 시스템",
                                "→ 키워드 입력 시 최근 뉴스 기사에 대한 입력된 키워드를 추출하여 동향 분석 시스템 연구",
                            ],
                            images: ["info_2.png"]
                        },
                        {
                            text: [
                                "- YOLOv8을 활용한 패션 이미지 레이블링 시스템",
                                "→ 패션 이미지에 대한 의류 정보 데이터 라벨링 자동화 시스템 연구",
                            ],
                            images: ["info_3.png"]
                        },
                        {
                            text: [
                                "- 객체 인식을 통한 로봇 동작 알고리즘",
                                "→ 전방의 객체 인식을 통해 자율 주행에 필요한 객체 인식을 위한 로봇 동작 알고리즘 설계",
                            ],
                            images: ["info_4.png"]
                        }
                    ]}
                    />
                </div>
            </div>
        </div>
    )
}



export const LabProjects = () => {

    const imagesData = [
        { id: 1, category: '논문', title: '프로젝트명1', date: '2024-06-10', src: DSUimage },
        { id: 2, category: '특허', title: '프로젝트명2', date: '2024-06-25', src: 'image.png' },
        { id: 3, category: '공모전', title: '프로젝트명3', date: '2024-07-05', src: 'image.png', badge: true },
        { id: 4, category: '학술대회', title: '프로젝트명4', date: '2024-07-12', src: 'image.png' },
        { id: 5, category: '학술지', title: '프로젝트명5', date: '2024-07-16', src: 'image.png', badge: true },
        { id: 6, category: '논문', title: '프로젝트명6', date: '2024-07-27', src: 'image.png', badge: true },
        { id: 7, category: '특허', title: '프로젝트명7', date: '2024-08-08', src: 'image.png' },
        { id: 8, category: '공모전', title: '프로젝트명8', date: '2024-08-16', src: DSUimage },
        { id: 9, category: '학술대회', title: '프로젝트명9', date: '2024-08-30', src: 'image.png', badge: true },
        { id: 10, category: '학술대회', title: '프로젝트명10', date: '2024-08-31', src: 'image.png' }
        // 더 많은 이미지 추가 가능
    ];

    const [activeTab, setActiveTab] = useState('ALL');

    const filteredImages = activeTab === 'ALL'
        ? imagesData
        : imagesData.filter(image => image.category === activeTab);

    const tabs = ['ALL', '논문', '특허', '공모전', '학술대회', '학술지'];

    return(
        <div className="aboutlab-container">
            <div className="projects-container">
                {/* 탭바 */}
                <div className="tab-bar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? 'active' : ''}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 이미지 그리드 */}
                <div className="image-grid">
                    {filteredImages.slice().reverse().map((image) => (
                        <div key={image.id} className="image-item">
                            <img src={image.src} alt={image.category} />
                            {/* 마우스 오버 시 보여줄 내용 */}
                            <div className="image-info">
                                <h3>{image.title}</h3>
                                <h5>{image.category}</h5>
                                <p>{image.date}</p>
                            </div>
                            {/* 우수논문상 배지 */}
                            {image.badge && (
                                <div className="badge">우수논문상</div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export const LabMemories = () => {
    return(
        <div className="aboutlab-container">
            <div className="memories-container">
                <h2>임플의 추억</h2>
            </div>
        </div>
    )
}

export const ProfessorProfile = () => {
    return(
        <div className="aboutlab-container">
            <div className="profile-container">
                <div className="profile-img">
                    <img src={ProfessorImg} alt="professor" />
                </div>
                <div className="profile-history">
                    sss
                </div>
            </div>
        </div>
    )
}