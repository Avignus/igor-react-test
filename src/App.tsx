import { useState } from "react";
import { GlobalStyles } from "./globalStyles";
import Lobby from "./routes";
import { Theme } from "./utils/types";
const App = () => {
    const [mode, setMode] = useState<Theme>("dark");

    return (
        <>
            <Lobby theme={mode} setTheme={setMode} />
            <GlobalStyles />
        </>
    );
};

export default App;
