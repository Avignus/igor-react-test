import {
    InputContainer,
    InputDarkStyled,
    InputWhiteStyled,
    IconContainer,
} from "./styles";
import { ReactComponent as SearchBlackSVG } from "src/assets/search-black.svg";
import { ReactComponent as SearchWhiteSVG } from "src/assets/search-white.svg";
import React from "react";
import { useTheme } from "src/context/ThemeProvider";

export type InputProps = {
    placeholder: string;
    onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};
const Input = ({ placeholder, onChange }: InputProps) => {
    const { theme } = useTheme();
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
                <InputWhiteStyled
                    name="nome"
                    onChange={onChange}
                    placeholder={placeholder}
                />
            ) : (
                <InputDarkStyled
                    name="nome"
                    onChange={onChange}
                    placeholder={placeholder}
                />
            )}
        </InputContainer>
    );
};

export default Input;
