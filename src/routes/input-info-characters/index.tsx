import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChangeEvent, useEffect, useState } from "react";
import { InputContainer } from "./styles";
import Input from "./components/input/input.component";
import InputSelect from "./components/input-select/input-select.component";
import RadioComponent from "./components/input-radio";
import { Characters, LimitOptions, LobbyProps } from "src/utils/types";
import {
    GENDER_LABEL,
    GENDER_OPTIONS,
    LIMIT_OPTIONS,
    SPECIES_LABEL,
    SPECIES_OPTIONS,
    STATUS_LABEL,
    STATUS_OPTIONS,
} from "src/utils/constants";

type InputValue = string | number;

const InputInfoCharacters = ({ theme }: LobbyProps) => {
    // const [selected, setSelected] = useState<LimitOptions>("5");

    const [characterData, setCharacterData] = useState<Characters>({
        nome: "",
        genero: "",
        especie: "",
        status: "",
        limite: "5",
    });
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

    const handleFormValues = () => {
        const formValues = [nome, genero, status, especie];
        let query = "";
        formValues.forEach((value, index) => {
            switch (index) {
                case 0:
                    if (value.length > 0) query += `/name=${value}`;
                    break;
                case 1:
                    if (value.length > 0) query += `/gender=${value}`;
                    break;
                case 2:
                    if (value.length > 0) query += `/status=${value}`;
                    break;
                case 3:
                    if (value.length > 0) query += `/species=${value}`;
                    break;
            }
        });
        return query;
    };
    useEffect(() => {
        console.log(characterData);
    }, [characterData]);
    return (
        <div>
            <InputContainer>
                <Input
                    onChange={handleChangeInput}
                    theme={theme}
                    placeholder="Nome"
                />
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
                <Link to={`/list-characters${handleFormValues()}`}>
                    Buscar personagem
                </Link>
            </InputContainer>

            <Outlet context={[theme]} />
        </div>
    );
};

export default InputInfoCharacters;
