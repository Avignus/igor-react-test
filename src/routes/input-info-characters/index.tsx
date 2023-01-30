import { ChangeEvent, useEffect, useState } from "react";
import { InputContainer } from "./styles";
import Input from "./components/input/input.component";
import InputSelect from "./components/input-select/input-select.component";
import RadioComponent from "./components/input-radio";
import { Characters, CharactersData } from "src/utils/types";
import {
    GENDER_LABEL,
    GENDER_OPTIONS,
    LIMIT_OPTIONS,
    SPECIES_LABEL,
    SPECIES_OPTIONS,
    STATUS_LABEL,
    STATUS_OPTIONS,
} from "src/utils/constants";
import { SearchButton } from "./components/search-button/styles";
import ListCharacters from "../list-characters";
import { useGetCharacters } from "src/utils/fetching";
import ToggleButton from "../toggle-button";
import { useTheme } from "src/context/ThemeProvider";
type InputValue = string | number;

const InputInfoCharacters = () => {
    const [characterData, setCharacterData] = useState<Characters>({
        nome: "",
        genero: "",
        especie: "",
        status: "",
        limite: "5",
    });
    const [charactersList, setCharactersList] = useState<CharactersData[]>([
        {
            id: "",
            name: "",
            status: "",
            species: "",
            gender: "",
            image: "",
        },
    ]);
    const { nome, genero, status, especie, limite } = characterData;

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        const handleValue =
            name === "limite" ? (value as InputValue as number) * 1 : value;
        setCharacterData({
            ...characterData,
            [name]: handleValue,
        });
    };
    useEffect(() => {
        console.log(characterData);
    }, [characterData]);

    const { getCharacters } = useGetCharacters({
        nome,
        status,
        especie,
        genero,
        limite,
    });

    const fetchData = async () => {
        const response = await getCharacters({
            variables: {
                page: 1,
                name: nome,
                gender: genero,
                status: status,
                species: especie,
            },
        });
        if (response) {
            const { results } = response.data.characters;
            console.log(results);
            setCharactersList(results);
        }
    };
    const { theme } = useTheme();
    return (
        <div>
            <InputContainer>
                <Input onChange={handleChangeInput} placeholder="Nome" />

                <InputSelect
                    characterData={characterData}
                    setCharacterData={setCharacterData}
                    name={GENDER_LABEL}
                    options={GENDER_OPTIONS}
                />

                <InputSelect
                    characterData={characterData}
                    setCharacterData={setCharacterData}
                    name={SPECIES_LABEL}
                    options={SPECIES_OPTIONS}
                />

                <InputSelect
                    characterData={characterData}
                    setCharacterData={setCharacterData}
                    name={STATUS_LABEL}
                    options={STATUS_OPTIONS}
                />
                <RadioComponent
                    characterData={characterData}
                    setSelected={setCharacterData}
                    selected={limite}
                    labelText="5"
                    options={LIMIT_OPTIONS}
                />
                <SearchButton theme={theme} onClick={fetchData}>
                    Buscar personagens
                </SearchButton>
                <ToggleButton />
            </InputContainer>
            <ListCharacters charactersList={charactersList} limite={limite} />

            {/* <Outlet context={[theme, characterData]} /> */}
        </div>
    );
};

export default InputInfoCharacters;
