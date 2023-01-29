import styled, { css } from "styled-components";
import { LobbyProps } from "src/utils/types";
export const LobbyContainer = styled.div<LobbyProps>`
    ${({ theme }) =>
        theme === "dark"
            ? css`
                  background-color: #6d6c6c;
              `
            : css`
                  background-color: white;
              `}
`;
export const TitleContainer = styled.div`
    width: 100%;
    height: 15vh;
    font-size: 28px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Title = styled.span`
    font-family: shlop;
    color: #04e0fe;
    fill: solid #04e0fe;
    -webkit-text-stroke: 3px #ebff00;
    font-size: 120px;
`;
