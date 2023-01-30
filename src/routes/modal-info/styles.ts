import styled, { css, keyframes } from "styled-components";
type ModalContainerProps = {
    isOpen: boolean;
};
const handleShowModal = keyframes`
  from {
    top: 0%;
  }
  to {
    top: 40%;
  }
`;
const handleFadeModal = keyframes`
  from {
    top: 40%;
  }
  to {
    top: -40%;
  }
`;
export const ModalContainer = styled.div<ModalContainerProps>`
    width: 600px;
    height: 250px;
    position: fixed;
    z-index: 1;
    ${({ isOpen }) =>
        isOpen
            ? css`
                  animation: ${handleShowModal} 0.3s forwards;
              `
            : css`
                  animation: ${handleFadeModal} 0.3s forwards;
              `}
    background-color: RGBA(128, 128, 128, 0.5);
    top: 40%;
    left: 40%;
    color: white;
    display: flex;
    flex-direction: row;
`;

export const ModalTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    width: 100%;
    padding-left: 15px;
`;
export const ModalTitle = styled.div`
    font-size: 40px;
    font-family: poppins;
    color: black;
`;
export const ModalSubline = styled.div`
    height: 8px;
    background-color: #00ff19;
    width: 95%;
`;
export const TitleAndContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
`;
export const ModalContentContainer = styled.div`
    height: 120px;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 15px;
`;
export const CharacterImage = styled.img`
    height: 100%;
    width: 200px;
`;
export const Content = styled.div`
    color: black;
    font-family: poppins;
    margin-top: 5px;
`;
export const Title = styled.div`
    font-family: poppins;
    font-size: 24px;
    color: white;
`;
export const CloseButton = styled.div`
    font-size: 58px;
    display: flex;
    color: black;
    justify-content: center;
    cursor: pointer;
    bottom: 50px;
`;
