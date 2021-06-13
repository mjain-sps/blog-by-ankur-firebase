import styled from "styled-components";
import MainTheme from "../../../Theme";
const ManageCategoriesMasterContainer = styled.div`
  width: 50vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
  h3 {
    width: max-content;
    font-family: ${MainTheme.fontFamily.montiserrat};
    color: ${MainTheme.fontColors.black};
    border-bottom: 1px solid ${MainTheme.backgroundColour.BG_ORANGE};
    margin: 10px;
  }
  p {
    text-align: left;
    font-family: ${MainTheme.fontFamily.roboto};
    color: ${MainTheme.fontColors.gray};
    margin: 5px;
  }
`;
const ManageCategoryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  > div {
    margin-left: auto;
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: flex-start;
  span:nth-child(2) {
    margin-left: auto;
  }
`;

export { ManageCategoryContainer, ManageCategoriesMasterContainer, Section };
