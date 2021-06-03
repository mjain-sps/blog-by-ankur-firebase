import styled from "styled-components";
import MainTheme from "../../../Theme";
const AddBlogFormContainer = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
  width: 80vw;
  padding: 10px;
  margin: 10px auto;
  text-align: center;
`;

const EditorContainer = styled.div`
  width: 100%;
  min-height: 500px;
  background-color: ${MainTheme.backgroundColour.BG_WHITE};

  .toolbarClassName {
    height: 100px;
    background-color: ${MainTheme.backgroundColour.BG_WHITE};
    margin: 0px;
  }
  .wrapperClassName {
    min-height: 500px;
  }
  .editorClassName {
    background-color: white;
    min-height: 400px;
    padding: 10px;
  }
`;

const ImageInputContainer = styled.div`
  height: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  input {
    visibility: hidden;
  }
  label {
    background-color: ${MainTheme.backgroundColour.BG_ORANGE};
    padding: 15px;
    color: ${MainTheme.fontColors.white};
    font-family: ${MainTheme.fontFamily.roboto};
    font-weight: ${MainTheme.fontWeight.bolder};
    font-size: ${MainTheme.fontSize.large};
    cursor: pointer;
    margin-left: 15px;
  }
  span {
    padding: 3px 0px;
    margin-left: 15px;
  }
  img {
    height: 180px;
    margin-right: 15px;
    object-fit: contain;
  }
`;

const ImageInputButtonDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const PublishButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 10px;
`;
export {
  AddBlogFormContainer,
  EditorContainer,
  ImageInputContainer,
  ImageInputButtonDiv,
  PublishButtonContainer,
};
