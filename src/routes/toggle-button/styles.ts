import styled from "styled-components";

export const Label = styled.label`
    display: flex;
    align-items: center;
    width: 100px;
    height: 50px;
    cursor: pointer;
`;

export const Switch = styled.div`
    position: relative;
    top: -5px;
    width: 60px;
    height: 28px;
    background: #b3b3b3;
    border-radius: 32px;
    padding: 4px;
    transition: 300ms all;

    &:before {
        transition: 300ms all;
        content: "";
        position: absolute;
        width: 28px;
        height: 28px;
        border-radius: 35px;
        top: 50%;
        left: 4px;
        background: white;
        transform: translate(0, -50%);
    }
`;

export const Input = styled.input`
    opacity: 0;
    position: absolute;
    &:checked + ${Switch} {
        background: green;

        &:before {
            transform: translate(32px, -50%);
        }
    }
`;
