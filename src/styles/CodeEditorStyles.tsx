import styled from "styled-components";

export const Editor = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: auto;
  width: 100%;
  max-width: 600px;
  height: 100%;
  margin: 1.25rem auto;
  margin-top: 0;

  .cm-editor {
    font-family: "Fira Code", monospace;
    font-size: 16px;
    background-color: #000000;
    height: 100%;
    outline: none;
  }

  .cm-content {
    padding: 10px;
  }
`;