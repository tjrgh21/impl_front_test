import React from "react";
import './ContentBox.css'

export const ContentBox = () => {
    return(
        <div className="contentbox-container">
            <div className="contentbox-wrap">
                <div className="contentbox-inner">
                    <div className="contentbox-title">
                        세미나 제목
                    </div>
                    <ul className="contentbox-info">
                        <li>
                            2024년 9월 24일 오전 10:00 
                        </li>
                        <li>
                            / 조회수 : 12345
                        </li>
                    </ul>
                    <div className="contentbox-text">
                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <h3>REFERENCES</h3>
                                <a href="ss">다운로드 파일 링크</a>
                            </div>
                        </div>
                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div>
                                    
                                </div>
                                <h3>INFORMATION</h3>
                                <h4>발표자 : 김권후</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}