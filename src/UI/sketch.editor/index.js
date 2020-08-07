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

    var fnStr = code;

    fnStr = fnStr.replace('function setup','p5.setup = function ');
    fnStr = fnStr.replace('function draw','p5.draw = function ');
    fnStr = fnStr.replace('function mousePressed','p5.mousePressed = function ');

    var testSketch = new Function ('p5', fnStr);
    
    if (!p5Sketch){
      setp5Sketch(new p5(testSketch, sketchRef.current));
    }

  }, []);

  const updateCode = () => {

    p5Sketch.remove();
    var fnStr = code;
    fnStr = fnStr.replace('function setup','p5.setup = function ');
    fnStr = fnStr.replace('function draw','p5.draw = function ');
    fnStr = fnStr.replace('function mousePressed','p5.mousePressed = function ');

    console.log('Converting:', fnStr);
    

    try {
      var testSketch = new Function ('p5', fnStr);
      setp5Sketch(new p5(testSketch, sketchRef.current));
    } catch (e) {
      console.log(e)
    }
    

  }

  return (
    <SketchEditor>
      <div>
        <Button onClick={() => updateCode()}>Run Code</Button>
        <Button onClick={() => p5Sketch.noLoop()}>Halt Code</Button>
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