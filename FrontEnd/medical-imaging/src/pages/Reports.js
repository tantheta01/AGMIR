import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/PostLoginHeader.js";
import Footer from "components/footers/PostLoginFooter.js";
import Table from "components/features/TrialTable1.js";

export default() => {
    return(
        <AnimationRevealPage>
            <Header />
            <Table />
            <Footer />
        </AnimationRevealPage>
    )
}