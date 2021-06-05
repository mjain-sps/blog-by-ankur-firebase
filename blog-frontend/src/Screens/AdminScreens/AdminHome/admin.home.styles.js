import styled from "styled-components";
import MainTheme from "../../../Theme";

const AdminContainer = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_WHITESMOKE};
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: flex-start;
  padding: 10px;
  @media (min-width: 768px) {
    width: 80vw;
    padding: 25px;
  }
  @media (min-width: 1200px) {
    width: 80vw;
    padding: 25px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    justify-content: center;
    align-items: center;
  }
`;
const AdminCard = styled.div`
  background-color: ${MainTheme.backgroundColour.BG_WHITE};
  box-shadow: rgba(0, 0, 0, 0.35) 0px 2px 5px;
  color: ${MainTheme.fontFamily.montiserrat};
  width: 100%;
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
  padding: 5px 10px;
  cursor: pointer;
  @media (min-width: 768px) {
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 80%;
  }
`;

const AdminCardTitle = styled.div`
  height: 20%;
  font-size: ${MainTheme.fontSize.XXL};
  font-family: ${MainTheme.fontFamily.oswald};
  color: ${MainTheme.fontColors.darkOrange};
  border-bottom: ${MainTheme.fontColors.black};
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 768px) {
    font-size: ${MainTheme.fontSize.extraLarge};
  }
  @media (min-width: 992px) {
    font-size: ${MainTheme.fontSize.XXL};
  }
`;

const AdminCardIcon = styled.div`
  height: 30%;
  color: ${MainTheme.fontColors.lightOrange};
  font-size: ${MainTheme.fontSize.XXXL};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AdminCardContent = styled.div`
  height: 40%;
  font-size: ${MainTheme.fontSize.medium};
  font-family: ${MainTheme.fontFamily.montiserrat};
  color: ${MainTheme.fontColors.gray};
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;
export {
  AdminContainer,
  AdminCard,
  AdminCardTitle,
  AdminCardContent,
  AdminCardIcon,
};
