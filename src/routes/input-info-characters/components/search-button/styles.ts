import styled, { css, keyframes } from "styled-components";

type SearchButtonProps = {
    theme: string;
};
const hoverColor = keyframes`
  from {
    background-color: white;
  }
  to {
    background-color: gray;
    color: white;
  }
`;
const hoverColorDefault = keyframes`
  from {
    background-color: gray;
    color: white;
  }
  to {
    background-color: white;
    color: black;
    
  }
`;

export const SearchButton = styled.button<SearchButtonProps>`
    ${({ theme }) =>
        theme === "dark"
            ? css`
      background-color: white:
      color: gray;
    `
            : css`
    background-color: gray:
      color: white;
    `}
    display: flex;
    font-family: poppins;
    font-size: 12px;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    width: 150px;
    height: 30px;
    background-color: white;
    border-radius: 49px;
    border: none;
    &:hover {
        animation: ${hoverColor} 0.3s forwards;
    }
    ${({ theme }) =>
        theme === "dark"
            ? css`
                  animation: ${hoverColorDefault} 0.3s forwards;
              `
            : css`
                  animation: ${hoverColor};
              `}
`;
