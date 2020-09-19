import React from 'react';
import styled from "styled-components";
import tw from "twin.macro";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import MainFeature from "components/features/WelcomePage.js";
import Image from "images/docots.jpg";
import Header from "components/headers/PostLoginHeader.js";
import Footer from "components/footers/PostLoginFooter.js";

export default (props) => {
    const Message = "Welcome " + props.name + "!"
    return (
        <AnimationRevealPage>
            <Header />
            <MainFeature
            subheading=""
            heading={Message}
            description="   What would you like to do today?"
            imageSrc = {Image}>
            </MainFeature>
            
            <Footer />
        </AnimationRevealPage>
    );
}