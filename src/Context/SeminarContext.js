import React, { createContext, useContext, useState } from "react";
import DSUimage from '../assets/images/DSU_Banner.png';

const SeminarContext = createContext();

export const SeminarProvider = ({ children }) => {
    const [SeminarsData, setSeminarsData] = useState([
        {
            id: 1,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "나승엽",
            date: "2024년 9월 1일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 2,
            title: "Out-of-distribution Generalization: Distributionally Robust Optimization",
            presenter: "고승민",
            date: "2024년 9월 3일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 3,
            title: "Generative Replay for Continual Learning",
            presenter: "황성빈",
            date: "2024년 9월 6일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 4,
            title: "Generative Replay for Continual Learning",
            presenter: "윤동희",
            date: "2024년 9월 10일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 5,
            title: "Generative Replay for Continual Learning",
            presenter: "최항",
            date: "2024년 9월 15일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 6,
            title: "Out-of-distribution Generalization: Distributionally Robust Optimization",
            presenter: "정현수",
            date: "2024년 9월 16일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 7,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "박세웅",
            date: "2024년 9월 20일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 8,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "전준우",
            date: "2024년 9월 22일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 9,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "정훈",
            date: "2024년 9월 23일",
            dday: "종료",
            imageUrl: "swtest.png",
            link: "./seminar"
        },
        {
            id: 10,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "김재모",
            date: "2024년 9월 25일",
            dday: "종료",
            imageUrl: "image.png",
            link: "./seminar"
        },
        {
            id: 11,
            title: "Out-Of-Distribution Detection for Image Classification: Part2",
            presenter: "김원중",
            date: "2024년 9월 26일",
            dday: "종료",
            imageUrl: DSUimage,
            link: "./seminar"
        },
    ]);

    return(
        <SeminarContext.Provider value={{ SeminarsData, setSeminarsData }}>
            {children}
        </SeminarContext.Provider>
    );
};

// Context를 쉽게 사용할 수 있게 해주는 커스텀 훅
export const useSeminarContext = () => {
    return useContext(SeminarContext);
}