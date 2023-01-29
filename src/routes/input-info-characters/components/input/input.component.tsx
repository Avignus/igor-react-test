import {
    InputContainer,
    InputDarkStyled,
    InputWhiteStyled,
    IconContainer,
} from "./styles";
import { ReactComponent as SearchBlackSVG } from "src/assets/search-black.svg";
import { ReactComponent as SearchWhiteSVG } from "src/assets/search-white.svg";
import { LobbyProps } from "src/utils/types";
import React from "react";

export type InputProps = {
    placeholder: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ theme, placeholder, onChange }: LobbyProps & InputProps) => {
    const isDark = theme === "dark";
    return (
        <InputContainer theme={theme}>
            <IconContainer>
                {isDark ? (
                    <SearchBlackSVG style={{ width: "20px", height: "20px" }} />
                ) : (
                    <SearchWhiteSVG style={{ width: "20px", height: "20px" }} />
                )}
            </IconContainer>
            {isDark ? (
                <InputDarkStyled
                    name="nome"
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <InputWhiteStyled
                    name="nome"
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </InputContainer>
    );
};

export default Input;
