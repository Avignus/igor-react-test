export type Characters = {
    nome: string;
    genero: string;
    especie: string;
    status: string;
    limite: LimitOptions;
};
export type LabelGenderTypes = "Gênero: todos" | "masculino" | "feminino";
export type ValueGenderTypes = "" | "male" | "female";

export type LabelSpeciesTypes = "Espécie: todos" | "humano" | "alien";
export type ValueSpeciesTypes = "" | "humanoid" | "alien";

export type LabelStatusTypes =
    | "Status: todos"
    | "vivo"
    | "morto"
    | "desconhecido";
export type ValueStatusTypes = "" | "alive" | "dead" | "unknown";

export type GenderOptions = {
    label: LabelGenderTypes;
    value: ValueGenderTypes;
};

export type SpeciesOptions = {
    label: LabelSpeciesTypes;
    value: ValueSpeciesTypes;
};

export type StatusOptions = {
    label: LabelStatusTypes;
    value: ValueStatusTypes;
};
export type Options = {
    label: LabelGenderTypes | LabelSpeciesTypes | LabelStatusTypes;
    value: ValueGenderTypes | ValueSpeciesTypes | ValueStatusTypes;
};
export type OptionsType = Options[];
export type LimitOptions = "5" | "10" | "20";
export type GenderOptionsType = GenderOptions[];
export type LimitOptionsType = LimitOptions[];
export type SpeciesOptionsType = SpeciesOptions[];
export type StatusOptionsType = StatusOptions[];
export type Theme = "dark" | "light";

export type LobbyProps = {
    theme: Theme;
    setTheme?: React.Dispatch<React.SetStateAction<Theme>>;
};
