import styled from "styled-components";
import MainTheme from "../../../Theme";

const BlogDetailContainer = styled.div`
  min-height: 100vh;
  padding: 10px 20px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 25px;
`;
const BlogRelevantDetailsSection = styled.div`
  display: flex;
  height: 40vh;
  width: 100%;
  justify-content: flex-start;
  gap: 20px;
  align-items: flex-start;
`;
const BlogDetailLeftSection = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img {
    height: 100%;
    width: 100%;
    object-fit: contain;
    margin: 0px auto;
  }
`;
const BlogDetailRightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-self: flex-start;
  height: 100%;
`;

const DateCommentsSection = styled.div`
  color: ${MainTheme.fontColors.lightOrange};
  font-family: ${MainTheme.fontFamily.oswald};
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const BlogTitle = styled.div`
  h1 {
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.extraLarge};
    color: ${MainTheme.fontColors.black};
    width: max-content;
    border-bottom: 1px solid ${MainTheme.backgroundColour.BG_ORANGE};
    padding: 0px;
    margin: 0px;
  }
`;

const AuthorDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: 1fr 1fr;
  height: 100px;
  width: 280px;
  column-gap: 30px;

  img {
    grid-row: 1/3;
    width: 100%;
    align-self: center;
    object-fit: contain;
    border-radius: 50%;
  }
`;

const BlogSynopsis = styled.div`
  border-top: 1px solid ${MainTheme.backgroundColour.BG_ORANGE};
  padding: 10px 0px;

  p {
    padding: 0px;
    margin: 0px;
    font-family: ${MainTheme.fontFamily.roboto};
    color: ${MainTheme.fontColors.black};
  }
`;

const BlogMainContent = styled.div`
  font-family: ${MainTheme.fontFamily.roboto};
  color: ${MainTheme.fontColors.black};
  font-size: ${MainTheme.fontSize.medium};
`;
const BlogCategory = styled.div``;
export {
  BlogDetailContainer,
  BlogDetailLeftSection,
  BlogDetailRightSection,
  DateCommentsSection,
  BlogTitle,
  AuthorDetails,
  BlogSynopsis,
  BlogCategory,
  BlogMainContent,
  BlogRelevantDetailsSection,
};
