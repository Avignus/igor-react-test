import styled, { keyframes, css } from "styled-components";

type InputSelectProps = {
    isOpen: boolean;
    totalHeight: number;
    isDark: boolean;
};

type OptionProps = {
    show: boolean;
};

const handleGrow = (height: number) => keyframes`
  0% {
    height: 32px;
    border-radius: 49px;
  }
  50% {
    border-radius: 12px;
  }
  100% {
    height: ${height}px;
    border-radius: 12px;
  }
`;
const handleDecrease = (height: number) => keyframes`
  0% {
    height: ${height}px;
    border-radius: 12px;
  }
  50% {
    border-radius: 49px;
  }
  100% {
    height: 32px;
    border-radius: 49px;
  }
`;

const handleFadeOut = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`;
const handleFadeIn = keyframes`
from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
export const InputSelectContainer = styled.div<InputSelectProps>`
    white-space: nowrap;
    flex-direction: column;
    font-family: poppins;
    overflow: hidden;
    font-size: 14px;

    /* border-radius: 49px; */
    ${({ isDark }) =>
        isDark
            ? css`
                  background-color: white;
                  color: gray;
              `
            : css`
                  background-color: gray;
                  color: white;
              `}
    width: 150px;
    cursor: pointer;
    ${({ isOpen, totalHeight }) =>
        isOpen
            ? css`
                  animation: ${handleGrow(totalHeight)} 0.3s forwards;
              `
            : css`
                  animation: ${handleDecrease(totalHeight)} 0.3s forwards;
              `}
`;

export const Option = styled.div<OptionProps>`
    display: flex;
    flex-direction: row;

    ${({ show }) =>
        show
            ? css`
                  animation: ${handleFadeIn} 0.3s forwards;
              `
            : css`
                  animation: ${handleFadeOut} 0.3s forwards;
              `}
    margin-top: 7px;
    padding-left: 10px;
    height: 20px;
`;
