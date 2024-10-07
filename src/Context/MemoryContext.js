import React, { createContext, useContext, useState } from "react";
import DSUimage from '../assets/images/DSU_Banner.png';

const MemoryContext = createContext();

export const MemoryProvider = ({ children }) => {
    const [MemoryImagesData, setMemoryImagesData] = useState([
        { id: 1, title: '임플의 추억1', date: '2024-06-10', imageUrl: DSUimage },
        { id: 2, title: '임플의 추억2', date: '2024-06-25', imageUrl: DSUimage },
        { id: 3, title: '임플의 추억3', date: '2024-07-05', imageUrl: DSUimage },
        { id: 4, title: '임플의 추억4', date: '2024-07-12', imageUrl: DSUimage },
        { id: 5, title: '임플의 추억5', date: '2024-07-16', imageUrl: DSUimage },
        { id: 6, title: '임플의 추억6', date: '2024-07-27', imageUrl: 'image.png' },
        { id: 7, title: '임플의 추억7', date: '2024-07-29', imageUrl: DSUimage },
        { id: 8, title: '임플의 추억8', date: '2024-08-01', imageUrl: DSUimage },
        { id: 9, title: '임플의 추억9', date: '2024-08-05', imageUrl: DSUimage },
        { id: 10, title: '임플의 추억10', date: '2024-08-19', imageUrl: DSUimage },
        { id: 11, title: '임플의 추억11', date: '2024-08-25', imageUrl: DSUimage },
        { id: 12, title: '임플의 추억12', date: '2024-09-09', imageUrl: DSUimage },
        { id: 13, title: '임플의 추억13', date: '2024-09-16', imageUrl: 'swtest.png' },
        { id: 14, title: '임플의 추억14', date: '2024-09-20', imageUrl: DSUimage },

        // 더 많은 이미지 추가 가능
    ]);

    return(
        <MemoryContext.Provider value={{ MemoryImagesData, setMemoryImagesData }}>
            {children}
        </MemoryContext.Provider>
    );
};

// Context를 쉽게 사용할 수 있게 해주는 커스텀 훅
export const useMemoryContext = () => {
    return useContext(MemoryContext);
};
