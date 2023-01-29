import styled, { css } from "styled-components";
import { InputProps } from "./input.component";
import { LobbyProps } from "src/utils/types";

export const InputContainer = styled.div<LobbyProps>`
    height: 33px;
    width: 254px;
    border-radius: 49px;
    flex-direction: row;
    display: flex;
    align-items: center;

    ${({ theme }) =>
        theme === "dark"
            ? css`
                  background-color: #ffffff;
                  color: black;
              `
            : css`
                  background-color: gray;
              `}
`;

export const InputDarkStyled = styled.input<LobbyProps & InputProps>`
    font-family: poppins;
    border: none;
    outline: none;
    background-color: transparent;
    ::placeholder,
    ::-webkit-input-placeholder {
        color: black;
    }
    :-ms-input-placeholder {
        color: black;
    }
`;

export const InputWhiteStyled = styled(InputDarkStyled)`
    ::placeholder,
    ::-webkit-input-placeholder {
        color: white;
    }
    :-ms-input-placeholder {
        color: white;
    }
`;

export const IconContainer = styled.div`
    width: 15%;
    display: flex;
    justify-content: center;
`;
