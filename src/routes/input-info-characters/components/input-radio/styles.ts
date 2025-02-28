import styled, { css } from "styled-components";

type RootProps = {
    size?: number;
    borderColor?: string;
    backgroundColor?: string;
};
type FillProps = {
    fillColor?: string;
    borderActive?: string;
};
type LimitLabel = {
    option: string;
    theme: string;
};
type LimitLabelText = {
    theme: string;
};
export const Root = styled.div<RootProps>`
    color: white;
    margin-left: 30px;
    cursor: pointer;
    width: ${(props) => (props.size ? props.size : 20)}px;
    height: ${(props) => (props.size ? props.size : 20)}px;
    position: relative;
    label {
        margin-left: -12px;
    }
    &::before {
        content: "";
        border-radius: 100%;
        border: 1px solid
            ${(props) => (props.borderColor ? props.borderColor : "#DDD")};
        background: ${(props) =>
            props.backgroundColor ? props.backgroundColor : "#FAFAFA"};
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        box-sizing: border-box;
        pointer-events: none;
        z-index: 0;
    }
`;

export const Fill = styled.div<FillProps>`
    background: ${(props) => (props.fillColor ? props.fillColor : "#A475E4")};
    width: 0;
    height: 0;
    border-radius: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.2s ease-in, height 0.2s ease-in;
    pointer-events: none;
    z-index: 1;

    &::before {
        content: "";
        opacity: 0;
        width: calc(20px - 1px);
        position: absolute;
        height: calc(20px - 1px);
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 1px solid
            ${(props) => (props.borderActive ? props.borderActive : "#A475E4")};
        border-radius: 100%;
    }
`;

export const Input = styled.input`
    opacity: 0;
    z-index: 2;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    cursor: pointer;

    &:focus {
        outline: none;
    }

    &:checked {
        & ~ ${Fill} {
            width: calc(100% - 7px);
            height: calc(100% - 7px);
            transition: width 0.2s ease-out, height 0.2s ease-out;

            &::before {
                opacity: 1;
                transition: opacity 1s ease;
            }
        }
    }
`;

export const Span = styled.span<LimitLabel>`
    position: relative;
    font-family: poppins;
    ${({ theme }) =>
        theme === "dark"
            ? css`
                  color: white;
              `
            : css`
                  right: 10px;
                  color: black;
              `}
    ${({ option }) =>
        option === "5"
            ? css`
                  right: 2px;
              `
            : css`
                  right: 10px;
              `}
`;

export const LimitLabelComponent = styled.span<LimitLabelText>`
    ${({ theme }) =>
        theme === "dark"
            ? css`
                  color: white;
              `
            : css`
                  color: black;
              `}
`;
