import React from "react";
import './AboutLab.css';


const InfoBox = ({ label, text }) => {
    return (
        <div className="info-box">
            <div className="label-container">
                <div className="blue-square"></div>
                <h2 className="info-box-label">{label}</h2>
            </div>
            <p className="info-box-text">{text}</p>
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
                    text={"최봉준 교수님"}
                    />
                    <InfoBox
                    label={"연구실"}
                    text={"NM관 1004호"}
                    />
                    <InfoBox
                    label={"연구실 소개"}
                    text={
                        <p>IMPL 연구회는 Implementation 의 줄임말로, 아이디어를 구현하고 실행하는 뜻을 가지고 있습니다.<br/>
                            더불어, “I’m Project Leader”라는 뜻을 함축하고 있어, 주도적인 역할을 하게 되어 성장하는 것을 목표로 하고 있습니다.
                            IMPL 연구회는 교수님 지도 아래 인공지능, 데이터 분석, 기본적인 프로그래밍 능력을 기반으로 다양한 프로젝트를 통해 이를 활용하고자 합니다.<br/>
                            ‘고민은 고(Go) 이후에’라는 IMPL 연구회의 모토를 통해 고민하는 것이 중요하지만, 그것을 실행으로 이어지는 것이 더 중요하다고 생각하며, 고민으로만 머무르지 않고, 실제 행동으로 옮기며 성장하고 있습니다.
                            무엇을 할 수 있을까 하는 고민보다는 무엇을 할 수 있다 라는 생각으로 행동으로 옮겨 이를 구현하며 성장하고 있습니다.
                            이를 통해 IMPL 연구회는 팀 프로젝트를 통해 학생들 간의 협업을 촉진하고, 
                            서로의 강점을 발휘할 뿐만 아니라 개인의 능력을 존중하면서 선후배의 경계없이 협력과 공동의 목표를 달성함으로써 단합력 향상뿐만 아니라 재밌고 밝은 분위기를 형성하여 연구하는 연구회입니다.<br/>
                            또한, IMPL 연구회는 빅데이터와 인공지능을 다양한 전공에 접목하여 보다 효율적인 시스템을 완성하는 가치를 중요시하며,
                            창업, 학술, 개발 등 다양한 진로 방향을 설계하고 이에 맞는 프로그램을 참여함으로써 개개인의 역량을 키울 수 있는 기회를 제공합니다.</p>
                    }
                    />
                </div>
            </div>
        </div>
    )
}

export const LabProjects = () => {
    return(
        <div className="aboutlab-container">
            <div className="projects-container">
                <h2>프로젝트/연구</h2>
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
                <h2>교수님 소개</h2>
            </div>
        </div>
    )
}