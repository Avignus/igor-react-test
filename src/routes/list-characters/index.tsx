import { useEffect } from "react";
import { useParams, useOutletContext } from "react-router-dom";
import { gql, useQuery } from "@apollo/client";

const ListCharacters = () => {
    type theme = "dark" | "light";
    const [mode] = useOutletContext<theme>();

    const params = useParams();
    console.log(mode);
    const { nome, genero, status, especie } = params;
    console.log(params);
    const handleParams = (param: string | undefined) => {
        if (param) {
            const newParam = param?.split("=")[1];
            return newParam;
        }
        return "";
    };
    // handleParams(nome);
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
                }
            }
        }
    `;
    const { loading, error, data } = useQuery(GET_CHARACTERS_BY_FILTER, {
        variables: {
            page: 1,
            name: handleParams(nome),
            status: handleParams(status),
            species: handleParams(especie),
            gender: handleParams(genero),
        },
    });
    useEffect(() => {
        if (data) {
            console.log(data);
        }
    }, [data]);
    // const handleFilter = () => {};
    return <div>lista</div>;
};

export default ListCharacters;
