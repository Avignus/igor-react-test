import { useTheme } from "src/context/ThemeProvider";
import InputInfoCharacters from "./input-info-characters";
import { LobbyContainer, Title, TitleContainer } from "./styles";

const Lobby = () => {
    const { theme } = useTheme();
    return (
        <LobbyContainer theme={theme}>
            <TitleContainer>
                <Title>Rick and Morty - Personagens</Title>
            </TitleContainer>
            <InputInfoCharacters />
        </LobbyContainer>
    );
};

export default Lobby;
