import React, {useState, useRef, useEffect} from 'react';
import styled from 'styled-components';



import Editor from "react-simple-code-editor";

import Prism from "prismjs";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

import Button from '@material-ui/core/Button';

import * as p5 from 'p5';

const SketchEditor = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 50px auto;
  grid-template-areas: "button button" "editor sketch"; 
  grid-template-gap: 10px;
  height: 400px;
`

const ButtonPanel = styled.div`
  grid-area: button;
`
const EditorPanel = styled.div`
  grid-area: editor;
`

const SketchPanel = styled.div`
  grid-area: sketch;
  background-color: silver;
`

export default ({initialCode}) => {

  const [code, setCode] = useState(initialCode || '')
  const [p5Sketch, setp5Sketch] = useState(null);

  const sketchRef = useRef();

  useEffect(() => {


    var sketchStr = `(s) => {
     
      s._user_draw = ${code};

      s.setup = () => {
        s.createCanvas(300, 300);
        s.background(0);
      }

      s.draw = () => {
        s.background(255);
      }
    }
    ` 

    
    var sketch = (s) => {
      
      s._myDraw = (s) => {
        s.background("red");
        s.fill("yellow");
        s.rect(10, 10, 80, 80);
      }

      s.updateDraw = (newDraw) => {
        s._myDraw = newDraw;
      }

      s.setup = () => {
        s.createCanvas(300, 300);
        s.background(0);
      }

      s.draw = () => {
        s._myDraw(s);
      }
    }

    if (!p5Sketch){
      setp5Sketch(new p5(sketch, sketchRef.current));
    }

  }
  );

  const updateCode = () => {
    console.log('Building with: ', code);
    setp5Sketch(prev => {
      prev._myDraw = new Function('s', `${code}`);

      return prev;
    });

    
  }

  return (
    <SketchEditor>
      <div>
        <Button onClick={() => updateCode()}>Run Code</Button>
      </div>
      <EditorPanel>
      <Editor
        value={code}
        onValueChange={(code) => {setCode(code)}}
        highlight={(code) => highlight(code, languages.js)}
        padding={10}
        style={{
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 14
        }}
    />
      </EditorPanel>
      <SketchPanel ref={sketchRef}>

      </SketchPanel>
    </SketchEditor>
  );
}  