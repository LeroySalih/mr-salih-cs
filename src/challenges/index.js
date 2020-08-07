import React from "react";


import Container from "../UI/container";
import PageTitle from "../UI/page.title";
import Challenge from "./challenge";

export default () => (
  <Container>
    <PageTitle>
      <h1>Challenges</h1>
      <Challenge
        title="RAT Analysis"
        description="How much information can we squeeze out of a hypontenues?"
        link="/challenges/rat-analysis"
      />
    </PageTitle>
  </Container>
);
