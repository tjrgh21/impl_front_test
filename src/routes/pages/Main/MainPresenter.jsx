import React from "react";
import './Main.css';
import { Layout } from "../../../components/Layout/Layout";

const MainPresenter = () => {
    return (
        <div className="main-container">
            <Layout>
                <p>Main Page</p>
            </Layout>
        </div>
    )
}

export default MainPresenter;