import React from "react";
import { Layout } from "../../../components/Layout/Layout";
import { ContentBox } from "./ContentBox/ContentBox";
import './Seminar.css'

export const SeminarPresenter = () => {
    return(
        <Layout>
            <ContentBox/>
        </Layout>
    )
}

export default SeminarPresenter;