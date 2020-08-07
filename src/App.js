import React, { useState, useEffect, useRef } from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import p5 from "p5";
import styled from "styled-components";

import NavBar from "./UI/navbar";

import LandingPage from "./pages/landing.page";
import ChallengesPage from "./challenges";
import ChallengePage from "./challenges/challenge";
import ChallengeRatAnalysisPage from "./challenges/rat.analysis";

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;
`;

export default () => {
  return (
    <Router>
      <PageLayout>
        <NavBar />
        <Switch>
          <Route path="/" exact>
            <LandingPage />
          </Route>
          <Route path="/challenges" exact>
            <ChallengesPage />
          </Route>
          <Route path="/challenges/rat-analysis">
            <ChallengeRatAnalysisPage />
          </Route>
        </Switch>
      </PageLayout>
    </Router>
  );
};

const SalihLogoImage = styled.img`
  width: 50px;
`;
