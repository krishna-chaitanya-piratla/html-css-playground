import React, { useState } from 'react';
import { AppContainer } from './styles/AppStyles';
import CodeEditor from './components/CodeEditor';


const App: React.FC = () => {
  const [htmlCode, setHtmlCode] = useState<string>('');
  const [cssCode, setCssCode] = useState<string>('');

  const handleHtmlCodeChange = (newCode: string) => {
    setHtmlCode(newCode);
  };

  const handleCssCodeChange = (newCode: string) => {
    setCssCode(newCode);
  };

  return (
    <AppContainer>
      <h1>HTML CSS PLAYGROUND</h1>
      <CodeEditor initialCode={htmlCode} language='html' onChange={handleHtmlCodeChange}/>
      <CodeEditor initialCode={cssCode} language='css' onChange={handleCssCodeChange}/>
    </AppContainer>
  );
}

export default App
