import styled, { css, keyframes } from "styled-components";

type ImageCardElementProps = {
    url: string;
};

const addShadow = keyframes`
  from {
    box-shadow: inset 0 0 50px black;
  }
  to {
    box-shadow: inset 0 0 490px black;
  }
`;
const removeShadow = keyframes`
  from {
    box-shadow: inset 0 0 490px black;
  }
  to {
    box-shadow: inset 0 0 50px black;
  }
`;
const addOpacity = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;
const removeOpacity = keyframes`
    from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;
export const CardsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    margin-top: 20px;
    padding-top: 30px;
    width: 100%;
`;
export const CardElement = styled.div<ImageCardElementProps>`
    width: 280px;
    height: 280px;
    margin: 5px;
    ${({ url }) =>
        url &&
        css`
            background-image: url(${url});
        `}
    &:hover {
        animation: ${addShadow} 0.3s forwards;
    }
    animation: ${removeShadow} 0.3s forwards;
`;
export const CardTextInfo = styled.div`
    animation: ${removeOpacity} 0.3s forwards;
    &:hover {
        animation: ${addOpacity} 0.3s forwards;
    }
    color: white;
    padding-left: 10px;
    font-family: poppins;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size: 30px;
    cursor: pointer;
`;

export const CharactersListContainer = styled.div`
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    @media (max-width: 887px) {
        grid-template-columns: 1fr;
    }
    @media (min-width: 888px) {
        grid-template-columns: 1fr 1fr 1fr;
    }
    @media (min-width: 1800px) {
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
`;
