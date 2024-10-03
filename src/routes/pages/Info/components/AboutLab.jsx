import React, { useState } from "react";
import './AboutLab.css';
import ProfessorImg from '../../../../assets/images/professor.jpg'
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useProjectContext } from "../../../../Context/ProjectContext";
import { useMemoryContext } from "../../../../Context/MemoryContext";
import { useSeminarContext } from "../../../../Context/SeminarContext";


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

const Pagination = ({ totalItems, itemsPerPage, currentPage, onPageChange }) => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const maxPageNumbersToShow = 3; // 페이지 버튼을 몇 개까지 보여줄지 설정

    const generatePageNumbers = () => {
        const pageNumbers = [];
        let startPage = Math.max(1, currentPage - 1);
        let endPage = Math.min(totalPages, currentPage + 1);

        // 시작 페이지가 1보다 클 경우 첫 페이지와 ... 표시
        if (startPage > 1) {
            pageNumbers.push(1);
            if (startPage > 2) {
                pageNumbers.push('...');
            }
        }

        // 중간 페이지 번호 표시
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(i);
        }

        // 마지막 페이지가 전체 페이지보다 작을 경우 ... 표시 후 마지막 페이지
        if (endPage < totalPages - 1) {
            pageNumbers.push('...');
        }

        if (endPage < totalPages) {
            pageNumbers.push(totalPages);
        }

        return pageNumbers;
    };

    return (
        <div className="pagination-container">
            <div className="pagination-pages">
                {generatePageNumbers().map((number, index) => (
                    <button
                        key={index}
                        className={`pagination-button ${currentPage === number ? 'active' : ''}`}
                        onClick={() => typeof number === 'number' && onPageChange(number)}
                        disabled={typeof number !== 'number'}
                    >
                        {number}
                    </button>
                ))}
            </div>
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
    const { imagesData } = useProjectContext();
    const [activeTab, setActiveTab] = useState('ALL');
    const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태
    const itemsPerPage = 9; // 한 페이지에 보여줄 아이템 수

    const filteredImages = activeTab === 'ALL'
        ? imagesData
        : imagesData.filter(image => image.category === activeTab);

    // filteredImages를 반전한 다음, currentItems를 슬라이스합니다.
    const reversedImages = [...filteredImages].reverse();
    const currentItems = reversedImages.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const tabs = ['ALL', '논문', '특허', '공모전', '학술대회', '학술지'];

    return (
        <div className="aboutlab-container">
            <div className="projects-container">
                {/* 탭바 */}
                <div className="tab-bar">
                    {tabs.map((tab) => (
                        <button
                            key={tab}
                            className={activeTab === tab ? 'active' : ''}
                            onClick={() => {
                                setActiveTab(tab);
                                setCurrentPage(1); // 탭 변경 시 첫 페이지로 리셋
                            }}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                {/* 이미지 그리드 */}
                <div className="image-grid">
                    {currentItems.map((image) => (
                        <div key={image.id} className="image-item">
                            <img src={image.src} alt={image.category} />
                            <div className="image-info">
                                <h3>{image.title}</h3>
                                <h5>{image.category}</h5>
                                <p>{image.date}</p>
                            </div>
                            {image.badge && <div className="badge">우수논문상</div>}
                        </div>
                    ))}
                </div>

                {/* 페이지 네비게이션 */}
                <Pagination
                    totalItems={filteredImages.length}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};


export const LabMemories = () => {
    const { MemoryImagesData } = useMemoryContext();
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9;

    const totalItems = MemoryImagesData.length;

    // memoryimagesData를 반전한 다음, currentItems를 슬라이스합니다.
    const reversedImages = [...MemoryImagesData].reverse();
    const currentItems = reversedImages.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="aboutlab-container">
            <div className="memories-container">
                <div className="image-grid">
                    {currentItems.map((memoryimage) => (
                        <div key={memoryimage.id} className="image-item">
                            <img src={memoryimage.src} alt={memoryimage.title} />
                            <div className="image-info">
                                <h5>{memoryimage.title}</h5>
                                <p>{memoryimage.date}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination 컴포넌트 사용 */}
                <Pagination
                    totalItems={totalItems}
                    itemsPerPage={itemsPerPage}
                    currentPage={currentPage}
                    onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
};


export const ProfessorProfile = () => {
    return(
        <div className="aboutlab-container">
            <div className="profile-container">
                <div className="photo-section">
                    <div className="photo-placeholder">
                    <img className="photo" src={ProfessorImg} alt="" />
                    </div>
                </div>
                <div className="info-section">
                    <table className="info-table">
                        <tbody>
                            <tr>
                                <td className="label">이름</td>
                                <td>최봉준</td>
                            </tr>
                            <tr>
                                <td className="label">직위/보직</td>
                                <td>조교수/학과장</td>
                            </tr>
                            <tr>
                                <td className="label">연구실</td>
                                <td>뉴밀레니엄관 NM1004호</td>
                            </tr>
                            <tr>
                                <td className="label">연락처</td>
                                <td>
                                    tel: 320-4288<br />
                                    email: bongjun.choi@dongseo.ac.kr
                                </td>
                            </tr>
                            <tr>
                                <td className="label">학력</td>
                                <td>
                                    동서대학교 컴퓨터정보공학부 학사<br />
                                    연세대학교 컴퓨터과학 석사
                                </td>
                            </tr>
                            <tr>
                                <td className="label">경력</td>
                                <td>
                                    현 동서대학교 소프트웨어융합대학 조교수<br />
                                    LG전자 CTO부문 인공지능연구소 선임연구원<br />
                                    Denmark Aalborg University Operation Research Lab Research Assistant<br />
                                    인공지능(지도학습, 비지도학습), 데이터 분석
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};


export const Seminar = () => {
    const {SeminarsData} = useSeminarContext();
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');  // 검색어 상태
    const itemsPerPage = 9;

    // SeminarsData를 반전한 후 검색 필터링 적용
    const reversedData = [...SeminarsData].reverse();

    const filteredData = reversedData.filter(seminar => 
        seminar.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        seminar.presenter.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const totalItems = filteredData.length;

    // 페이지네이션을 적용한 현재 페이지의 데이터
    const currentItems = filteredData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="aboutlab-container">
            <div className="seminar-container">
                <div className="search-box">
                    <div className="content">
                        <span className="icon"><i className="fas fa-search"></i></span>
                        <input 
                            type="search" 
                            id="search" 
                            placeholder="Search.." 
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value); // 검색어 업데이트
                                setCurrentPage(1); // 검색 시 페이지를 첫 페이지로 이동
                            }}
                        />
                    </div>
                </div>
                <div className="info-count">
                    Number of entries: <span>{totalItems}</span>
                    {searchQuery && <span> (필터 활성화)</span>} {/* 검색어가 있을 때만 필터 활성화 표시 */}
                </div>

                {totalItems === 0 ? (
                    <div className="no-results">
                        <h3>검색결과가 없습니다.</h3>
                    </div>
                ) : (
                    <div className="wrapper-seminar-list">
                        {currentItems.map(seminar => (
                            <div className="seminar-container news-column" key={seminar.id}>
                                <div className="news-content">
                                    <div className="image-box">
                                        <div className={`dday ${seminar.dday === '종료' ? 'black' : ''}`}>
                                            {seminar.dday}
                                        </div>
                                        <div 
                                            className="real-img"
                                            style={{ backgroundImage: `url(${seminar.imageUrl})` }}
                                        ></div>
                                        <div className="overlay">
                                            <div className="wrapper">
                                                <a href={seminar.link} target="_self" rel="noopener noreferrer">
                                                    자세히
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="content-box">
                                        <h3 className="seminar-title">
                                            <a href={seminar.link} target="_self" rel="noopener noreferrer">
                                                {seminar.title}
                                            </a>
                                        </h3>
                                        <span><i className="fa-solid fa-user"></i><h4>{seminar.presenter}</h4></span>
                                        <span><i className="fa-regular fa-calendar"></i><p>{seminar.date}</p></span>
                                    </div>
                                    <div className="line-footer">
                                        <a href={seminar.link} className="seminar-info-button" target="_self" rel="noopener noreferrer">
                                            세미나 정보 보기 <i className="fa-solid fa-arrow-right-long"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                {totalItems > 0 && (
                    <Pagination
                        totalItems={totalItems}
                        itemsPerPage={itemsPerPage}
                        currentPage={currentPage}
                        onPageChange={setCurrentPage}
                    />
                )}
            </div>
        </div>
    );
};


