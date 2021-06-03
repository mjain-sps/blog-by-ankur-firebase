import styled from "styled-components";
import MainTheme from "../../Theme";

// Section 1 and Featured Blogs Styled Components starts here
const HomeSection1Container = styled.div`
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HomeSectionContainer = styled.div`
  min-height: 500px;
  padding: 0px 10px;
  width: 80%;
  margin: 20px auto;
`;

const Title = styled.div`
  text-align: center;
  font-family: ${MainTheme.fontFamily.montiserrat};
  font-size: ${MainTheme.fontSize.extraLarge};
  color: ${MainTheme.fontColors.black};
  font-weight: ${MainTheme.fontWeight.bold};
  margin: 10px auto;
  padding: 30px 0px;
  span {
    border-bottom: 3px solid ${MainTheme.backgroundColour.BG_ORANGE};
  }
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
  height: 400px;
  /* justify-content: center;
  align-items: center; */
`;

const CardWithSingleImage = styled.div`
  overflow: hidden;
  height: 100%;
  width: 100%;
  position: relative;
`;
const CardWithMultipleImage = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  height: 100%;
  width: 100%;
  gap: 5px;
`;

const BackDrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const HomeImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 200ms ease-in;
  ${CardWithSingleImage}:hover & {
    transform: scale(1.1);
  }
  ${ImageWrapper}:hover & {
    transform: scale(1.1);
  }
`;

const BlogSynposisImageOverLay = styled.div`
  position: absolute;
  width: 60%;
  height: 30%;
  transform: translateY(-50%) translateX(-50%);
  top: 50%;
  left: 50%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 5;
  color: ${MainTheme.fontColors.white};
  font-family: ${MainTheme.fontFamily.montiserrat};
  font-size: ${MainTheme.fontSize.medium};
  font-weight: ${MainTheme.fontWeight.regular};
  text-align: center;
  span {
    position: absolute;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    top: 50%;
  }
  ${CardWithSingleImage}:hover & {
    background-color: rgba(0, 0, 0, 0.6);
  }
  ${ImageWrapper}:hover & {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;

// Section Latest Blogs Styled Components starts here
const LatestBlogCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  align-items: center;
  height: 600px;
`;

const LatestBlogImageWrapper = styled.div`
  height: 60%;
  width: 100%;
`;
const LatestBlogCardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;
const LatestBlogContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 70%;
  height: 40%;
  margin: auto;
`;
const LatestBlogContentTitle = styled.div`
  color: ${MainTheme.fontColors.lightOrange};
  font-family: ${MainTheme.fontFamily.montiserrat};
  font-size: ${MainTheme.fontSize.extraLarge};
  font-weight: ${MainTheme.fontWeight.bold};
`;
const LatestBlogContentAuthor = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
`;

const DisplayPicAuthor = styled.img`
  height: 50px;
  object-fit: contain;
  border-radius: 50%;
  width: 50px;
  cursor: pointer;
`;

const AuthorCredentials = styled.div`
  margin-left: 10px;
  cursor: pointer;
  span:nth-child(1) {
    color: black;
  }
  span:nth-child(2) {
    color: gray;
    margin-left: 5px;
  }
`;
const Comments = styled.div`
  width: 30px;
  height: 30px;
  position: relative;
  margin-left: auto;
  cursor: pointer;

  .commentValue {
    color: white;
    position: absolute;
    z-index: 5;
    top: 40%;
    transform: translateY(-50%) translateX(-50%);
    left: 50%;
    font-size: ${MainTheme.fontSize.small};
    font-weight: ${MainTheme.fontWeight.bolder};
    font-family: ${MainTheme.fontFamily.roboto};
  }
  span :nth-child(1) {
    position: absolute;
    top: 0%;
    left: 0%;
    font-size: 30px;
    line-height: 30px;
    /* transform: translateY(-50%) translateX(-50%); */
  }
`;
const LatestBlogContentSynopsis = styled.div`
  color: ${MainTheme.fontColors.gray};
  font-size: ${MainTheme.fontSize.medium};
  font-family: ${MainTheme.fontFamily.montiserrat};
`;

const LatestBlogReadMoreButton = styled.button`
  background-color: ${MainTheme.backgroundColour.BG_ORANGE};
  color: ${MainTheme.fontColors.white};
  font-family: ${MainTheme.fontFamily.roboto};
  font-size: ${MainTheme.fontSize.medium};
  font-weight: ${MainTheme.fontWeight.bold};
  text-align: center;
  padding: 10px;
  border: none;
  margin-right: auto;
  cursor: pointer;
`;
export {
  HomeSection1Container,
  HomeSectionContainer,
  Title,
  CardContainer,
  CardWithSingleImage,
  CardWithMultipleImage,
  ImageWrapper,
  BlogSynposisImageOverLay,
  BackDrop,
  HomeImageTag,
  // Section 3 exports
  LatestBlogCardContainer,
  LatestBlogImageWrapper,
  LatestBlogCardImage,
  LatestBlogContentWrapper,
  LatestBlogContentTitle,
  LatestBlogContentAuthor,
  DisplayPicAuthor,
  AuthorCredentials,
  Comments,
  LatestBlogContentSynopsis,
  LatestBlogReadMoreButton,
};
