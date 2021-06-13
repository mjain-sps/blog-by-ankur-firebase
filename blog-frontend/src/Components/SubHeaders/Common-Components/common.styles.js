import styled from "styled-components";
import MainTheme from "../../../Theme";

const SubHeaderCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 0px 5px;
`;
const SubHeaderCardImage = styled.img`
  height: 80%;
  object-fit: contain;
`;

const SubHeaderCardContent = styled.div`
  text-align: center;
  height: 10%;
  margin: 10px 0px;
  font-family: ${MainTheme.fontFamily.montiserrat};
  font-size: ${MainTheme.fontSize.small};
  color: ${MainTheme.fontColors.black};
  font-weight: ${MainTheme.fontWeight.bold};
`;

export { SubHeaderCardContent, SubHeaderCardImage, SubHeaderCard };
