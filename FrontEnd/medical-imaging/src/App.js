import "tailwindcss/dist/base.css";
import "styles/globalStyles.css";
import React from "react";
import { css } from "styled-components/macro"; //eslint-disable-line


import IllustrationWithInput from "./components/hero/Landing Page";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Upload from "./pages/Upload";
import Download from "./pages/Download";
import Profile from "./pages/Profile";
import Feedback from "./pages/PostLoginContactUs";
import Reports from "./pages/Reports";
import ViewReport from "./pages/ViewReport";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App(props) {
  // return <AnimationRevealPage disabled></AnimationRevealPage>;
  return (
    <Router>
      <Switch>
        <Route path="/login" >
          <Login user = {props.AppProps.loginUser} onChange = {props.loginChange}/>
        </Route>
        <Route path="/signup">
          <Signup user = {props.AppProps.signUpUser} onChange = {props.signupChange} SignupSubmit = {props.SignupSubmit}/>
        </Route>
        <Route path="/aboutUs">
          <AboutUs />
        </Route>
        <Route path="/contactus">
          <ContactUs />
        </Route>
        <Route path="/upload">
          <Upload />
        </Route>
        <Route path="/download">
          <Download />
        </Route>
        <Route path="/profile">
          <Profile user = {props.AppProps.loggedInUser} />
        </Route>
        <Route path="/contact">
          <Feedback />
        </Route>
        <Route path="/reports">
          <Reports />
        </Route>
        <Route path="/viewreport">
          <ViewReport />
        </Route>
        <Route path="/">
          <IllustrationWithInput />
        </Route>
      </Switch>
    </Router>
  );
}

