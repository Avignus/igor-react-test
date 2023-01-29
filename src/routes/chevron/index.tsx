import { ChevronContainer, Chevron, ChevronProps } from "./styles";
import ChevronLeft from "src/assets/chevron-left-black.png";
const ChevronComponent = ({ rotate }: ChevronProps) => {
    return (
        <ChevronContainer>
            <Chevron rotate={rotate} src={ChevronLeft} />
        </ChevronContainer>
    );
};

export default ChevronComponent;
