import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import styled from "styled-components"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/light.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import MainFeature1 from "components/features/TwoColWithButton.js";
// import MainFeature2 from "components/features/TwoColSingleFeatureWithStats.js";
// import MainFeature3 from "components/features/TwoColSingleFeatureWithStats2.js";
import Features from "components/features/ThreeColSimple.js";
// import Features from "components/features/ThreeColWithSideImage.js";
import TeamCardGrid from "components/cards/ProfileThreeColGrid.js";

import SupportIconImage from "images/support-icon.svg";
import ShieldIconImage from "images/shield-icon.svg";
import CustomerLoveIconImage from "images/simple-icon.svg";
import TeamMemberMale from "images/blankimageman.jpg";
import TeamMemberFemale from "images/blankimagegirl.jpg";
import DoctorPhoto from "images/AboutUs1.jpg";
import DoctorPhoto2 from "images/AboutUs2.jpg";

const Subheading = tw.span`uppercase tracking-wider text-sm`;
export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <MainFeature1
        subheading={<Subheading>About Our Application</Subheading>}
        heading="AGMIR: Automatic Generation of Medical Imaging Reports"
        description="Medical Imaging is widely used in clinical practice for diagnosis and treatment. The reading and interpretation of medical images is usually done by specialized medical professionals. Report-writing can often be error-prone due to inexperienced physicans, or time-consuming and tedious for experienced physicians."
        imageSrc={DoctorPhoto}
      />
      <MainFeature1
        subheading={<Subheading>Our Vision</Subheading>}
        heading="We aim to do the job of analysing images and making reports easier."
        description = "To address these issues, we made an app for automatic generation of medical imaging reports."
        imageSrc={DoctorPhoto2}
        textOnLeft={false}
      />
      <Features
        subheading={<Subheading>Our Team Members</Subheading>}
        heading="Maybe we'll upload our faces later"
        cards={[
          {
            imageSrc: TeamMemberMale,
            title: "Tanay Sharma",
            description: "FrontEnd and BackEnd"
          },
          {
            imageSrc: TeamMemberFemale,
            title: "Liza Dahiya",
            description: "Model Making"
          },
          {
            imageSrc: TeamMemberMale,
            title: "Akshat Gupta",
            description: "Model Making"
          },
          {
            imageSrc: TeamMemberMale,
            title: "Sheel Shah",
            description: "BackEnd"
          },
          {
            imageSrc: TeamMemberFemale,
            title: "Surapaneni Sai Vigna",
            description: "FrontEnd"
          },
        ]}
        linkText=""
      />
      <Footer />
    </AnimationRevealPage>
  );
};
