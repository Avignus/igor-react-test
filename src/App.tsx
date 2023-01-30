import { GlobalStyles } from "./globalStyles";
import Lobby from "./routes";
const App = () => {
    // const [mode, setMode] = useState<Theme>("dark");

    return (
        <>
            <Lobby />
            <GlobalStyles />
        </>
    );
};

export default App;
