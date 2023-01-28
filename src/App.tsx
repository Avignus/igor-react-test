import { useState } from "react";
import Lobby from "./routes";
type theme = "dark" | "light";
const App = () => {
    const [mode, setMode] = useState<theme>("dark");

    return <Lobby />;
};

export default App;
