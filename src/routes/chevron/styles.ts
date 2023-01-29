import styled, { keyframes, css } from "styled-components";

export type ChevronProps = {
    rotate: boolean;
};

const handleRotation = keyframes`
  to {
    rotate: -90deg;
  }
`;

const handleRotationDefault = keyframes`
  from {
    rotate: -90deg;
  }
  to {
    rotate: 0deg;
  }
`;
export const ChevronContainer = styled.div`
    width: 50%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
`;
export const Chevron = styled.img<ChevronProps>`
    width: 15px;
    height: 15px;
    padding-right: 5px;
    ${({ rotate }) =>
        rotate
            ? css`
                  animation: ${handleRotation} 0.3s forwards;
              `
            : css`
                  animation: ${handleRotationDefault} 0.3s forwards;
              `}
`;
