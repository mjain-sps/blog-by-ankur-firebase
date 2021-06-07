import styled from "styled-components";
import MainTheme from "../../../Theme";

const AllPostsContainer = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
`;
const AllPostsSearchContainer = styled.div`
  width: 50%;
  height: 50px;
  border: 1px solid ${MainTheme.fontColors.gray};
  border-radius: 10px;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 3%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${MainTheme.fontColors.gray};
  }
`;
const AllPostsSearchBar = styled.input`
  outline: none;
  width: 97%;
  height: 100%;
  border: none;
  color: ${MainTheme.fontColors.black};
  font-size: ${MainTheme.fontSize.large};
  font-family: ${MainTheme.fontFamily.montiserrat};

  &::placeholder {
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.large};
  }
`;

const AllPostsCard = styled.div`
  display: flex;
  width: 40%;
  margin: 20px auto;
  border: 1px solid rgba(125, 125, 125, 0.4);
  border-radius: 10px;
  padding: 5px;
  height: 300px;
  background-color: ${MainTheme.backgroundColour.BG_WHITE};
`;
const CardLeftSection = styled.div`
  width: 49%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 8px;
  padding: 8px 5px;
  div:nth-child(1) {
    width: 100%;
    align-self: center;
  }
  h5 {
    width: auto;
    font-family: ${MainTheme.fontFamily.montiserrat};
    color: ${MainTheme.fontColors.black};
    border-bottom: 1px solid ${MainTheme.backgroundColour.BG_ORANGE};
    font-weight: ${MainTheme.fontWeight.bold};
    font-size: ${MainTheme.fontSize.large};
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 0px;
    margin: 0px;
  }

  p,
  span {
    font-family: ${MainTheme.fontFamily.roboto};
    color: ${MainTheme.fontColors.black};
    font-weight: ${MainTheme.fontWeight.regular};
    font-size: ${MainTheme.fontSize.medium};
    padding: 0px;
    margin: 0px;
  }
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const VerticalDivider = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  width: 5px;
  height: 90%;
  margin: auto;
`;
const BlogSynopsis = styled.div`
  font-family: ${MainTheme.fontFamily.roboto};
  color: ${MainTheme.fontColors.black};
  font-size: ${MainTheme.fontSize.medium};
`;
const BlogContent = styled.div`
  width: 100%;
  height: 60px;
  overflow: hidden;
  padding: 1px;
  font-family: ${MainTheme.fontFamily.montiserrat};
  color: ${MainTheme.fontColors.gray};
  font-size: ${MainTheme.fontSize.medium};
`;

const ReadMoreIcon = styled.div`
  height: 25px;
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  width: max-content;
  cursor: pointer;
  text-align: center;
  border-radius: 3px;
  padding: 3px 5px;
  a {
    text-decoration: none;
  }
  span {
    color: ${MainTheme.fontColors.black};
  }
`;
const CardRightSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;
  width: 49%;
  height: 100%;
  text-align: center;
  img {
    width: 90%;
    height: 90%;
    margin: auto;
    object-fit: cover;
  }
`;
export {
  AllPostsContainer,
  AllPostsSearchContainer,
  AllPostsSearchBar,
  AllPostsCard,
  Section,
  BlogSynopsis,
  VerticalDivider,
  BlogContent,
  CardLeftSection,
  CardRightSection,
  ReadMoreIcon,
};
