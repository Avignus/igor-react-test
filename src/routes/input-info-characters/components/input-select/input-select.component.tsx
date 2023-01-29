import { useEffect, useState } from "react";
import ChevronComponent from "src/routes/chevron";
import {
    Options,
    OptionsType,
    Characters,
    // AllOptionsType,
} from "src/utils/types";

import { InputSelectContainer, Option } from "./styles";

type InputSelectProps = {
    options: OptionsType;
    name: string;
    characterData: Characters;
    setCharacterData: React.Dispatch<React.SetStateAction<Characters>>;
};
const InputSelect = ({
    options,
    characterData,
    setCharacterData,
    name,
}: InputSelectProps) => {
    const [open, setOpen] = useState(false);
    const [selectedOption, setSelected] = useState<Options>(options[0]);
    const handleSelectOption = (option: Options) => {
        setSelected(option);
    };
    const hiddenOptions = options.filter(
        (option) => option.label !== selectedOption.label
    );
    useEffect(() => {
        setCharacterData({
            ...characterData,
            [name]: selectedOption.value,
        });
    }, [selectedOption]);
    return (
        <InputSelectContainer
            totalHeight={(options.length + 2) * 20}
            onClick={() => setOpen(!open)}
            isOpen={open}
        >
            <Option show>
                {selectedOption.label} <ChevronComponent rotate={open} />
            </Option>
            {hiddenOptions.map(
                (option, index) =>
                    option.label !== selectedOption.label && (
                        <Option
                            show={open}
                            key={index}
                            onClick={() => handleSelectOption(option)}
                        >
                            {option.label}
                        </Option>
                    )
            )}
        </InputSelectContainer>
    );
};

export default InputSelect;
