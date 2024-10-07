import React from "react";
import { useParams } from "react-router-dom";
import './ContentBox.css'
import { useSeminarContext } from "../../../../Context/SeminarContext";

export const ContentBox = () => {
    const {SeminarsData} = useSeminarContext();
    const { id } = useParams();
    const seminar = SeminarsData.find((seminar) => seminar.id === parseInt(id));

    return(
        <div className="contentbox-container">
            <div className="contentbox-wrap">
                <div className="contentbox-inner">
                    <div className="contentbox-title">
                        {seminar.id} {seminar.title}
                    </div>
                    <ul className="contentbox-info">
                        <li>
                            {seminar.date}
                        </li>
                        <li>
                            / 조회수 : 12345
                        </li>
                    </ul>

                    <div className="contentbox-text">
                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>REFERENCES</h3>
                                </div>
                                <div className="con-download">
                                    <a href="ss">DMQAOpenSeminar_Out-Of-Distribution Generalization_Distributionally Robust Optimization_240913.pdf</a>
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>INFORMATION</h3>
                                </div>
                                <div className="con">
                                    <h4>발표자 : {seminar.presenter}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>TOPIC</h3>
                                </div>
                                <div className="con">
                                    <h4>{seminar.title}</h4>
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>On-Line Video</h3>
                                </div>
                                <div className="con">
                                    <div className="youtube-player">
                                        <iframe
                                            width="560" 
                                            height="315"
                                            src="https://www.youtube.com/embed/_-4nakEwN0s?si=BfFQB-5nbK_BLRQX" 
                                            title="YouTube video player" 
                                            frameborder="0" 
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                                            referrerpolicy="strict-origin-when-cross-origin" 
                                            allowfullscreen>
                                        </iframe>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>OVERVIEW</h3>
                                </div>
                                <div className="con">
                                    <div className="overview1">
                                        <p>
                                            O요약 : 기계학습 및 딥러닝 모델은 학습 데이터와 테스트 데이터가 동일한 분포에서 추출된다는 가정(i.i.d. assumption)에 기반하여 테스트 데이터에 대한 일반화 성능을 확보한다. 그러나 학습 데이터와 테스트 데이터의 분포가 다를 경우, 분포 차이(distribution shift)로 인해 모델 성능이 저하될 수 있다. Out-of-distribution generalization은 학습 데이터만을 활용해 학습 시 보지 못한 새로운 분포의 데이터에 대해서도 일반화 성능을 확보할 수 있도록 하는 방법론이다. 이번 세미나에서는 distribution shift 및 out-of-distribution generalization의 기본 개념과 더불어, 서로 다른 분포를 가진 데이터들 사이에서 최악의 경우에도 모델 성능을 최대화하는 방향으로 학습을 진행하여 강건한 성능을 확보하는 'Distributionally Robust Optimization' 방법론을 소개하고자 한다.
                                        </p>
                                    </div>
                                    <div className="overview2">
                                        <p>
                                            <h4>참고자료 :</h4>
                                            <strong>[1]</strong> Sagawa, S., Koh, P. W., Hashimoto, T. B., & Liang, P. (2019, September). Distributionally Robust Neural Networks. In International Conference on Learning Representations. <br />
                                            <strong>[2]</strong> Cao, K., Wei, C., Gaidon, A., Arechiga, N., & Ma, T. (2019). Learning imbalanced datasets with label-distribution-aware margin loss. Advances in neural information processing systems, 32. <br />
                                            <strong>[3]</strong> Cui, Y., Jia, M., Lin, T. Y., Song, Y., & Belongie, S. (2019). Class-balanced loss based on effective number of samples. In Proceedings of the IEEE/CVF conference on computer vision and pattern recognition (pp. 9268-9277). <br />
                                            <strong>[4]</strong> Koh, P. W., Sagawa, S., Marklund, H., Xie, S. M., Zhang, M., Balsubramani, A., ... & Liang, P. (2021, July). Wilds: A benchmark of in-the-wild distribution shifts. In International conference on machine learning (pp. 5637-5664). PMLR
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-block-inner">
                                <div className="con-title">
                                    <h3>청취자 후기</h3>
                                </div>
                                <div className="con">
                                    <div className="review-name">
                                        <h4>경병규</h4>
                                    </div>
                                    <div className="review-text">
                                        <p>
                                            이번 세미나는 Distribution Shift 중 Group Shift에 대해 진행되었다. Group Shift는 상위 그룹 데이터 기준으로 데이터 분포가 동일할 수는 있지만, 하위 그룹 기준으로는 상이할 수 있다는 것을 의미한다. 10p 장표를 보면 쉽게 이해할 수 있다. 이를 해결하기 위한 방법(DRO)은 ERM처럼 평균을 최적화하는 것이 아닌, Worst-Case를 줄여가는 방식으로 학습한다. 실험적으로 보면, 평균 성능은 ERM이 DRO보다 높지만, Worst-Case에 대해서는 DRO가 훨씬 월등했다. 향후 인공지능 관점에서 완벽한 모델이 되려면, ERM처럼 대체로 모든 샘플을 잘 맞추는 것도 중요하지만, 극히 어려운 Sample들을 잘 맞추는 것 또한 중요할 것이다. 이처럼 DRO는 향후 인공지능이 매우 포화된 상태에서 중요한 Key 역할을 할 것 같다는 느낌을 받았다. 유익한 세미나를 준비해준 정진용 연구원님께 고맙다는 말을 전하며 세미나 후기를 마친다.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="contentbox-block">
                            <div className="contentbox-direction">
                                <div className="before">                              
                                    <a href={`/seminar/${seminar.id-1}`}><i class="fa-solid fa-arrow-left-long"></i>이전</a>                         
                                </div>
                                <div className="next">                          
                                    <a href={`/seminar/${seminar.id+1}`}>다음<i class="fa-solid fa-arrow-right-long"></i></a>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}