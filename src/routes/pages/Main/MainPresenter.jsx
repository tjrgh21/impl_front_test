import React from "react";
import './Main.css';
import { Layout } from "../../../components/Layout/Layout";
import { Project } from "./components/Project/Project";
import { ImplMemory } from "./components/ImplMemory/ImplMemory";
import { MainBottom } from "./components/MainBottom/MainBottom";
import { SeminarList } from "./components/SeminarList/SeminarList";


const MainPresenter = () => {

    return (
        <div className="main-container">
            <Layout >
                <Project/>
                <ImplMemory />
                <SeminarList />
                <MainBottom />
            </Layout>
        </div>
    )
}

export default MainPresenter;