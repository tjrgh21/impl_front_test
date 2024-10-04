import React, { createContext, useContext, useState } from "react";
import DSUimage from '../assets/images/DSU_Banner.png';

const ProjectContext = createContext();

export const ProjectProvider = ({ children }) => {
    const [imagesData, setImagesData] = useState([
        { id: 1, category: '논문', title: '프로젝트명1', date: '2024-06-10', src: DSUimage },
        { id: 2, category: '특허', title: '프로젝트명2', date: '2024-06-25', src: 'image.png' },
        { id: 3, category: '공모전', title: '프로젝트명3', date: '2024-07-05', src: 'image.png', badge: true },
        { id: 4, category: '학술대회', title: '프로젝트명4', date: '2024-07-12', src: 'image.png' },
        { id: 5, category: '학술지', title: '프로젝트명5', date: '2024-07-16', src: 'image.png', badge: true },
        { id: 6, category: '논문', title: '프로젝트명6', date: '2024-07-27', src: 'image.png', badge: true },
        { id: 7, category: '특허', title: '프로젝트명7', date: '2024-08-08', src: 'image.png' },
        { id: 8, category: '공모전', title: '프로젝트명8', date: '2024-08-16', src: DSUimage },
        { id: 9, category: '학술대회', title: '프로젝트명9', date: '2024-08-30', src: 'image.png', badge: true },
        { id: 10, category: '학술대회', title: '프로젝트명10', date: '2024-08-31', src: DSUimage },
        { id: 11, category: '학술지', title: '프로젝트명11', date: '2024-09-05', src: DSUimage },
        { id: 12, category: '논문', title: '프로젝트명12', date: '2024-09-10', src: DSUimage, badge: true },
        { id: 13, category: '특허', title: '프로젝트명13', date: '2024-09-16', src: DSUimage },
        { id: 14, category: '공모전', title: '프로젝트명14', date: '2024-09-23', src: DSUimage },
    
        // 더 많은 이미지 추가 가능
    ]);

    return(
        <ProjectContext.Provider value={{ imagesData, setImagesData }}>
            {children}
        </ProjectContext.Provider>
    );
};

// Context를 쉽게 사용할 수 있게 해주는 커스텀 훅
export const useProjectContext = () => {
    return useContext(ProjectContext);
};