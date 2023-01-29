import {
    GenderOptionsType,
    LimitOptionsType,
    SpeciesOptionsType,
    StatusOptionsType,
} from "./types";

export const GENDER_LABEL = "genero";
export const GENDER_OPTIONS: GenderOptionsType = [
    { label: "Gênero: todos", value: "" },
    { label: "masculino", value: "male" },
    { label: "feminino", value: "female" },
];
export const LIMIT_LABEL = "limite";
export const LIMIT_OPTIONS: LimitOptionsType = ["5", "10", "20"];

export const SPECIES_LABEL = "especie";
export const SPECIES_OPTIONS: SpeciesOptionsType = [
    { label: "Espécie: todos", value: "" },
    { label: "humano", value: "humanoid" },
    { label: "alien", value: "alien" },
];
export const STATUS_LABEL = "status";
export const STATUS_OPTIONS: StatusOptionsType = [
    { label: "Status: todos", value: "" },
    { label: "vivo", value: "alive" },
    { label: "morto", value: "dead" },
    { label: "desconhecido", value: "unknown" },
];
