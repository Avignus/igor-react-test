import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import InputInfoCharacters from "./input-info-characters";
import ListCharacters from "./list-characters";
import { LobbyContainer, Title, TitleContainer } from "./styles";
import { LobbyProps } from "src/utils/types";

const Lobby = ({ theme, setTheme }: LobbyProps) => {
    console.log(theme);
    return (
        <LobbyContainer theme={theme}>
            <TitleContainer>
                <Title>Rick and Morty - Personagens</Title>
            </TitleContainer>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<InputInfoCharacters theme={theme} />}
                    >
                        <Route
                            path="list-characters/:nome?/:genero?/:especie?/:status?"
                            element={<ListCharacters />}
                        />
                    </Route>
                </Routes>
            </Router>
        </LobbyContainer>
    );
};

export default Lobby;
