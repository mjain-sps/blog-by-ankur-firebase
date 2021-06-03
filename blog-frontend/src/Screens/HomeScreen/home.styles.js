import styled from "styled-components";
import MainTheme from "../../Theme";
const HomeSection1Container = styled.div`
  height: 500px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const HomeSection2Container = styled.div`
  min-height: 500px;
  padding: 0px 10px;
`;

const Title = styled.div`
  text-align: center;
  font-family: ${MainTheme.fontFamily.roboto};
  font-size: ${MainTheme.fontSize.large};
  color: ${MainTheme.fontColors.darkOrange};
  font-weight: ${MainTheme.fontWeight.bolder};
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

const HomeImageTag = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 200ms ease-in;
  ${BackDrop}:hover & {
    transform: scale(1.1);
  }
`;

const ImageWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  position: relative;
`;

const BlogSynposisImageOverLay = styled.div`
  position: absolute;
  width: 50%;
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
`;

export {
  HomeSection1Container,
  HomeSection2Container,
  Title,
  CardContainer,
  CardWithSingleImage,
  CardWithMultipleImage,
  ImageWrapper,
  BlogSynposisImageOverLay,
  BackDrop,
  HomeImageTag,
};
