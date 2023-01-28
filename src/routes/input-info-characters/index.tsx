import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { ChangeEvent, useState, useCallback, ReactEventHandler } from "react";
import { useEffect } from "react";

type character = {
    nome: string;
    genero: string;
    especie: string;
    status: string;
    limite: number;
};
type inputValue = string | number;
const InputInfoCharacters = () => {
    const [mode, setMode] = useState("dark");
    const [characterData, setCharacterData] = useState<character>({
        nome: "",
        genero: "",
        especie: "",
        status: "",
        limite: 5,
    });

    useEffect(() => {
        console.log(characterData);
    }, [characterData]);

    const { nome, genero, status, especie } = characterData;

    const handleChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.currentTarget;
        const handleValue =
            name === "limite" ? (value as inputValue as number) * 1 : value;
        setCharacterData({
            ...characterData,
            [name]: handleValue,
        });
    };

    const handleFormValues = () => {
        const formValues = [nome, genero, status, especie];
        let query = "";
        formValues.forEach((value) => {
            if (value.length > 0) query += `/${value}`;
        });
        return query;
    };
    return (
        <div>
            <input
                onChange={handleChangeInput}
                type="radio"
                id="5"
                name="limite"
                value={5}
            />
            <label htmlFor="5">5</label>
            <input
                onChange={handleChangeInput}
                type="radio"
                id="10"
                name="limite"
                value={10}
            />
            <label htmlFor="10">10</label>
            <input
                onChange={handleChangeInput}
                type="radio"
                id="20"
                name="limite"
                value={20}
            />
            <label htmlFor="20">20</label>
            <input
                onChange={handleChangeInput}
                name="nome"
                placeholder="nome"
            />
            <input
                onChange={handleChangeInput}
                name="genero"
                placeholder="genero"
            />
            <input
                onChange={handleChangeInput}
                name="especie"
                placeholder="especie"
            />
            <input
                onChange={handleChangeInput}
                name="status"
                placeholder="status"
            />
            <Link to={`/list-characters${handleFormValues()}`}>
                Buscar personagem
            </Link>
            <Outlet context={[mode]} />
        </div>
    );
};

export default InputInfoCharacters;
