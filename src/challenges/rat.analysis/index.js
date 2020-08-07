import React from "react";
import styled from "styled-components";

import Container from "../../UI/container";
import PageTitle from "../../UI/page.title";
import { H1, H2, H3, H4, Text } from "../../UI/text.styles";

import Example from "./example.png";

const ExampleImage = styled.img`
  width: 30rem;
`;

export default () => {
  return (
    <Container>
      <PageTitle>
        <H1>RAT* Analysis</H1>
        <H2>*(right angle triangle)</H2>
      </PageTitle>
      <H3>How much infomation can we squeeze from a hypotenues?</H3>
      <H4>Background</H4>
      <Text>
        Imagine that we have been given coordinates for point A and point B.
        These coordinates denote the start and end of a hypotenues of a right
        angle triangle. How much other information can we determine from these
        coordinates?
      </Text>
      <Text>
        In this challenge, we are going to calculate and then display
        (visualise) as much information as we can find, on a given RAT from only
        its hypotenues. We will find:
      </Text>
      <Text>
        <ul>
          <li>Coordinates of the triangle verticies.</li>
          <li>Perimeter of the triangle.</li>
          <li>Angles of the triangle</li>
          <li>Area of the triangle</li>
        </ul>
        all from 2 coordinates (😊).
      </Text>
      <H3>Step 1: The Maths</H3>
      <Text>
        Before we start programming, we are going to ensure that we understand
        the maths behind the task.
      </Text>
      <ExampleImage src={Example} />
      <Text>
        The image above shows 4 different hypotenues, AB. AD, AF and AH. The
        dotted lines show the triangles that they form.
      </Text>
    </Container>
  );
};
