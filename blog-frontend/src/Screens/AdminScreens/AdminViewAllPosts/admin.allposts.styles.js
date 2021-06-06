import styled from "styled-components";
import MainTheme from "../../../Theme";

const AllPostsContainer = styled.div``;
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
  flex-direction: column;
  width: 40%;
  margin: auto;
  border: 1px solid black;
  border-radius: 10px;
  padding: 5px 10px;
  h5 {
    text-align: center;
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.large};
    padding: 10px 0px;
    margin: 0px;
    border-bottom: 1px solid rgba(125, 125, 125, 0.4);
  }
  p {
    text-align: center;
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.medium};
    color: ${MainTheme.fontColors.darkOrange};
    padding: 10px 0px;
    margin: 0px;
    border-bottom: 1px solid rgba(125, 125, 125, 0.4);
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 10px 0px;
  margin: 0px;

  img {
    width: 100px;
    object-fit: contain;
    height: 100px;
  }
  div {
    display: flex;
    justify-content: flex-start;
    gap: 10px;
    align-items: center;
  }
`;
const VerticalDivider = styled.div``;
const BlogSynopsis = styled.div`
  padding: 10px;
  font-family: ${MainTheme.fontFamily.roboto};
  color: ${MainTheme.fontColors.gray};
  font-size: ${MainTheme.fontSize.large};
`;
const BlogContent = styled.div`
  height: 60px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
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
};
