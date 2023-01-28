import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import CharacterDetails from "./character-details";
import InputInfoCharacters from "./input-info-characters";
import ListCharacters from "./list-characters";

const Lobby = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<InputInfoCharacters />}>
                    <Route
                        path="list-characters/:nome?/:genero?/:especie?/:status?"
                        element={<ListCharacters />}
                    />
                </Route>
            </Routes>
        </Router>
    );
};

export default Lobby;
