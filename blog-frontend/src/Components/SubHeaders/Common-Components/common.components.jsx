import React from "react";
import {
  SubHeaderCard,
  SubHeaderCardImage,
  SubHeaderCardContent,
} from "./common.styles.js";
const CardComponentSubHeader = ({ img, content }) => {
  return (
    <SubHeaderCard>
      <SubHeaderCardImage src={img} />
      <SubHeaderCardContent>{content}</SubHeaderCardContent>
    </SubHeaderCard>
  );
};

export default CardComponentSubHeader;
