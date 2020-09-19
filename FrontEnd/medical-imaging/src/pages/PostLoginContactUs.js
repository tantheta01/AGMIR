import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import tw from "twin.macro";
import { css } from "styled-components/macro"; //eslint-disable-line
import Header from "components/headers/PostLoginHeader.js";
import Footer from "components/footers/PostLoginFooter.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustrationFullForm.js";
import ContactDetails from "components/cards/ThreeColContactDetails.js";

const Address = tw.span`leading-relaxed`;
const AddressLine = tw.span`block`;
const Email = tw.span`text-sm mt-6 block text-gray-500`;
const Phone = tw.span`text-sm mt-0 block text-gray-500`;

export default () => {
  return (
    <AnimationRevealPage>
      <Header />
      <ContactUsForm />
      <ContactDetails
        cards={[
          {
            title: "Tanay Sharma",
            description: (
              <>
                <Address>
                  <AddressLine>address1</AddressLine>
                  <AddressLine>address2</AddressLine>
                </Address>
                <Email>email</Email>
                <Phone>phone number</Phone>
              </>
            )
          },
          {
            title: "Liza Dahiya",
            description: (
              <>
                <Address>
                  <AddressLine>address1</AddressLine>
                  <AddressLine>address2</AddressLine>
                </Address>
                <Email>email</Email>
                <Phone>phone number</Phone>
              </>
            )
          },
          {
            title: "Akshat Gupta",
            description: (
              <>
                <Address>
                  <AddressLine>address1</AddressLine>
                  <AddressLine>address2</AddressLine>
                </Address>
                <Email>email</Email>
                <Phone>phone number</Phone>
              </>
            )
          },
          {
            title: "Sheel Shah",
            description: (
              <>
                <Address>
                  <AddressLine>address1</AddressLine>
                  <AddressLine>address2</AddressLine>
                </Address>
                <Email>email</Email>
                <Phone>phone number</Phone>
              </>
            )
          },
          {
            title: "Surapaneni Sai Vigna",
            description: (
              <>
                <Address>
                  <AddressLine>address1</AddressLine>
                  <AddressLine>address2</AddressLine>
                </Address>
                <Email>email</Email>
                <Phone>phone number</Phone>
              </>
            )
          }
        ]}
      />
      <Footer />
    </AnimationRevealPage>
  );
};