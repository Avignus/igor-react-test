import { LimitOptions, LimitOptionsType } from "src/utils/types";
import { Root, Input, Fill } from "./styles";
import { Characters } from "src/utils/types";
// type OptionsLabel = "5" | "10" | "20";
type RadioComponentProps = {
    characterData: Characters;
    selected?: string;
    setSelected: React.Dispatch<React.SetStateAction<Characters>>;
    options: LimitOptionsType;
    labelText?: LimitOptions;
    name?: string;
    onChange?: (value: boolean) => void;
    value?: string;
    checked?: boolean;
};
const RadioComponent = ({
    characterData,
    selected,
    setSelected,
    options,
    name,
    value,
}: RadioComponentProps) => {
    return (
        <>
            {options.map((option, index) => (
                <Root key={index}>
                    <label>
                        <span
                            style={{
                                position: "relative",
                                right: option === "5" ? "2px" : "10px",
                            }}
                        >
                            {option}
                        </span>
                        <Input
                            type="radio"
                            onChange={() =>
                                setSelected({
                                    ...characterData,
                                    limite: option,
                                })
                            }
                            name={name}
                            value={value}
                            checked={selected === option}
                            aria-checked={selected === option}
                        />
                        <Fill />
                    </label>
                </Root>
            ))}
        </>
    );
};

export default RadioComponent;
