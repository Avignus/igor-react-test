import { LimitOptions, LimitOptionsType } from "src/utils/types";
import { Root, Input, Fill, Span, LimitLabelComponent } from "./styles";
import { Characters } from "src/utils/types";
import { useTheme } from "src/context/ThemeProvider";
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
    const { theme } = useTheme();
    return (
        <>
            <LimitLabelComponent theme={theme}>Limite</LimitLabelComponent>
            {options.map((option, index) => (
                <Root key={index}>
                    <label>
                        <Span option={option} theme={theme}>
                            {option}
                        </Span>
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
