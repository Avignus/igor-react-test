import { gql, useLazyQuery } from "@apollo/client";
import { Characters } from "./types";

export function useGetCharacters({
    nome,
    status,
    especie,
    genero,
    limite,
}: Characters) {
    const handleParams = (param: string | undefined) => {
        if (param) {
            const newParam = param?.split("=")[1];
            if (newParam === "null") return "";
            return newParam;
        }
    };

    const GET_CHARACTERS_BY_FILTER = gql`
        query (
            $page: Int
            $name: String
            $status: String
            $species: String
            $gender: String
            $type: String
        ) {
            characters(
                page: $page
                filter: {
                    name: $name
                    status: $status
                    species: $species
                    type: $type
                    gender: $gender
                }
            ) {
                results {
                    id
                    name
                    status
                    species
                    gender
                    image
                }
            }
        }
    `;

    const [getCharacters, { loading, error, data }] = useLazyQuery(
        GET_CHARACTERS_BY_FILTER,
        {
            variables: {
                page: 1,
                name: handleParams(nome),
                status: handleParams(status),
                species: handleParams(especie),
                gender: handleParams(genero),
            },
        }
    );
    return { getCharacters, loading, error, data };
}
