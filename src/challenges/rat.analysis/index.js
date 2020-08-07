import React from "react";
import styled from "styled-components";

import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';



import Container from "../../UI/container";
import PageTitle from "../../UI/page.title";
import { H1, H2, H3, H4, Text, Caption, Table, Ul } from "../../UI/text.styles";
import Task, {TaskHeading, TaskBody} from '../../UI/task';
import Solution, {SolutionHeading, SolutionBody} from '../../UI/solution';
import TabPanel from '../../UI/tab.panel';
import Example from "./example.png";


import SketchEditor from '../../UI/sketch.editor';

const ExampleImage = styled.img`
  width: 30rem;
`;




export default () => {

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  const initialCode = `
    var x;

    function setup() {
      p5.createCanvas(200, 200);
      p5.background(100);
      p5.angleMode(p5.DEGREES);
      x = 0;  
    }
  
function draw() {

  p5.translate(x, 10)
  p5.rotate(x);
  p5.rect(0, 0, 30, 30);
  x = x + 1;
  
}

  `

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
      
      <Ul>
        <li>Coordinates of the triangle verticies.</li>
        <li>Perimeter of the triangle.</li>
        <li>Angles of the triangle</li>
        <li>Area of the triangle</li>
      </Ul>

      <Text>
        all from 2 coordinates (<span role="img" aria-label="smiley face">😊</span>).
        </Text>
      <H3>Step 1: The Maths</H3>
      <Text>
        Before we start programming, we are going to ensure that we understand
        the maths behind the task.
      </Text>
      <div style={{textAlign: "center"}}>
      <ExampleImage src={Example} />
      <Caption>4 different hypotenues AB, AD, AF and AH</Caption>
      </div>
      <Text>
        The image above shows 4 different triangles, with hypotenues AB, AD, AF and AH. The
        dotted lines show the triangles that they form.  For each triangle, we have the coordinates of 2 of the vertices.  The first thing we are going to calculate are the coordinates of the third vertice, which has the right angle.
      </Text>



      <Tabs
        value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
      >
        <Tab label="Task">
        
   
        </Tab>
        <Tab label="Solution"  />
        
      </Tabs>

      <TabPanel value={value} index={0} >
      <Task>
          <TaskHeading>Task: Find the third vertice.</TaskHeading>
          <TaskBody>
            <p>The table below has the coordinates used in the previous image.  For each triangle, calculate the missing coordinates.</p>
            <p>The final line asks you to consider a general rule.  Is there a pattern from the previous coordinates?  How can you describe this pattern using the letters a, b, c and d?</p>
          </TaskBody> 
        </Task>

      <Table>
        <thead>
        <tr>
          <th>Line</th>
          <th>Coordinates of Start</th>
          <th>Coordinates of End</th>
          <th>Coordinates of Right Angle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>AB</td>
          <td>(1,1)</td>
          <td>(3, 4)</td>
          <td></td>
        </tr>
        <tr>
          <td>AD</td>
          <td>(1,1)</td>
          <td>(-1, 3)</td>
          <td></td>
        </tr>
        <tr>
          <td>AF</td>
          <td>(1,1)</td>
          <td>(-2, -1)</td>
          <td></td>
        </tr>
        <tr>
          <td>AH</td>
          <td>(1,1)</td>
          <td>(4, -2)</td>
          <td></td>
        </tr>
        <tr>
          <td>General</td>
          <td>(a, b)</td>
          <td>(c, d)</td>
          <td></td>
        </tr>
        </tbody>
      </Table>
      </TabPanel>
      <TabPanel value={value} index={1} >
        <Solution>
          <SolutionHeading>Solution: Find the third vertice.</SolutionHeading>
          <SolutionBody>
            <p>While calculating the coordinate of the third vertice, you may have seen a pattern.  The answer is always the x coordinate of the start and the y coordinate of the end.</p>
            <p>So, if the start is (a, b) and the end is (c, d), then the third coordinate will always be (c, b)</p>
            <p>Remember: this only works for right angle triangles</p>
          </SolutionBody> 
        </Solution>

      <Table>
        <thead>
        <tr>
          <th>Line</th>
          <th>Coordinates of Start</th>
          <th>Coordinates of End</th>
          <th>Coordinates of Right Angle</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>AB</td>
          <td>(1,1)</td>
          <td>(3, 4)</td>
          <td></td>
        </tr>
        <tr>
          <td>AD</td>
          <td>(1,1)</td>
          <td>(-1, 3)</td>
          <td></td>
        </tr>
        <tr>
          <td>AF</td>
          <td>(1,1)</td>
          <td>(-2, -1)</td>
          <td></td>
        </tr>
        <tr>
          <td>AH</td>
          <td>(1,1)</td>
          <td>(4, -2)</td>
          <td></td>
        </tr>
        <tr>
          <td>General</td>
          <td>(a, b)</td>
          <td>(c, d)</td>
          <td></td>
        </tr>
        </tbody>
      </Table>
    </TabPanel>
        
   
      <SketchEditor initialCode={initialCode}/>
    </Container>
  );
};


