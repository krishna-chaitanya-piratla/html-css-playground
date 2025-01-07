import React, { useState } from 'react';
import { StyledIframe, PreviewArea } from "../styles/PreviewAreaStyles"
import { AppContainer, PlaygroundArea } from '../styles/AppStyles';
import CodeEditor from './CodeEditor';

export const starterCode = {
    css: "p {\n  color: red;\n}",
    html: "<p>Hello World</p>",
  };

  const Playground: React.FC = () => {
    const [cssCode, setCssCode] = useState<string>(starterCode.css);
    const [htmlCode, setHtmlCode] = useState<string>(starterCode.html);
  
    const handleCssCodeChange = (newCode: string) => {
      setCssCode(newCode);
    };
  
    const handleHtmlCodeChange = (newCode: string) => {
      setHtmlCode(newCode);
    };
  
    return (
      <AppContainer>
        <h1>HTML and CSS Playground</h1>
        <PlaygroundArea>
            <CodeEditor
              initialCode={htmlCode}
              language="html"
              onChange={handleHtmlCodeChange}
            />
            <CodeEditor
              initialCode={cssCode}
              language="css"
              onChange={handleCssCodeChange}
            />
  
          <PreviewArea>
            <StyledIframe
              title="Preview"
              srcDoc={`<!DOCTYPE html>
  <html>
  <head>
  <style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    box-sizing: border-box;
    overflow: hidden;
  }
  ${cssCode}
  </style>
  </head>
  <body>
  ${htmlCode}
  </body>
  </html>`}
            />
          </PreviewArea>
        </PlaygroundArea>
      </AppContainer>
    );
  };
  
  export default Playground;