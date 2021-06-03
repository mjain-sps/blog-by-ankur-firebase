import styled from "styled-components";
import MainTheme from "../../Theme";

const Input = styled.input`
  outline: none;

  border: none;
  display: block;
  margin: 10px auto;
  padding: 15px;
  width: 100%;
  font-size: ${MainTheme.fontSize.medium};
  font-family: ${MainTheme.fontFamily.montiserrat};

  &:focus {
    border: 1px solid rgba(255, 197, 141, 0.8);
  }
  &::placeholder {
    font-family: ${MainTheme.fontFamily.montiserrat};
    font-size: ${MainTheme.fontSize.medium};
    color: ${MainTheme.fontColors.gray};
  }
`;

export { Input };
