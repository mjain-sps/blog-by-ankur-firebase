import styled from "styled-components";

const RichTextAreaMain = styled.div`
  width: 90%;
  margin: 10px auto;
  min-height: 300px;
  background-color: #fff;
  padding: 20px;
  &:focus {
    border: 1px solid rgba(255, 197, 141, 0.8);
  }

  > .DraftEditor-root {
    height: 100%;
    width: 100%;
  }
`;

export { RichTextAreaMain };
