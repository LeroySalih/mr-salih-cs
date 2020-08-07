import React from "react";
import "./styles.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import styled from "styled-components";

import NavBar from "./UI/navbar";

import LandingPage from "./pages/landing.page";
import ChallengesPage from "./challenges";

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


