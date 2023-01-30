import { createContext, useContext, useState, ReactNode } from "react";
import { LobbyProps } from "src/utils/types";
import { Theme } from "src/utils/types";
const defaultValue: LobbyProps = {
    theme: "dark",
};
const ThemeContext = createContext<LobbyProps>({ ...defaultValue });
const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [theme, setTheme] = useState<Theme>("dark");
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};

const useTheme = (): LobbyProps => {
    return useContext(ThemeContext);
};
export { ThemeContext, ThemeProvider, useTheme };
