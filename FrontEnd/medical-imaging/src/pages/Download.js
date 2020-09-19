import React from 'react';
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Header from "components/headers/PostLoginHeader.js";
import Footer from "components/footers/PostLoginFooter.js";



export default () => {
    return (
        <AnimationRevealPage>
            <Header />
            <Footer />
        </AnimationRevealPage>
    );
}