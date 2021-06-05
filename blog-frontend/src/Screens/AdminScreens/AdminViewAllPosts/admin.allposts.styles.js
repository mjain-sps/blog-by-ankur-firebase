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
  width: 50%;
  margin: auto;
  border: 1px solid black;
  padding: 5px 10px;
  h5 {
    text-align: center;
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.large};
  }
`;

const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  img {
    width: 100px;
    object-fit: contain;
    height: 100px;
  }
`;
export {
  AllPostsContainer,
  AllPostsSearchContainer,
  AllPostsSearchBar,
  AllPostsCard,
  Section,
};
