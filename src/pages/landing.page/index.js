import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import PageTitle from "../../UI/page.title";


const H1 = styled.div`
  font-family: "Monoton", Verdana;
  font-size: 2rem;
`;

export default () => {
  const myRef = useRef();
  //const [p5Sketch, setp5Sketch] = useState(null);

  useEffect(() => {
    //if (!p5Sketch) {
      // setp5Sketch(new p5(sketch, myRef.current));
    //}
  }, []);

  /*
  const sketch = s => {
    let x;

    s.setup = () => {
      s.createCanvas(400, 400);
      //s.background(0);
      x = 0;
    };

    s.draw = () => {
      s.rect(x, 100, 20, 20);
      x = x + 1;
    };
  };
  */

  return (
    <div>
      <PageTitle>
        <H1>Cool Stuff</H1>
      </PageTitle>
      <div>
        A collection of cool ideas and concepts stolen from other people.
      </div>
      <div style={{ position: "absolute", top: 0 }} ref={myRef} />
    </div>
  );
};
