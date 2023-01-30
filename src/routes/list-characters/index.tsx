import { useEffect, useState } from "react";
import { CharactersData } from "src/utils/types";
// import { useGetCharacters } from "src/utils/fetching";
import {
    CardElement,
    CardsContainer,
    CardTextInfo,
    CharactersListContainer,
} from "./styles";
import {
    CharacterImage,
    Content,
    ModalContainer,
    ModalContentContainer,
    ModalSubline,
    ModalTitle,
    ModalTitleContainer,
    TitleAndContentContainer,
    CloseButton,
} from "../modal-info/styles";
type CharactersList = {
    charactersList: CharactersData[];
    limite: string;
};
const ListCharacters = ({ charactersList, limite }: CharactersList) => {
    const [charactersListLimited, setCharactersListLimited] = useState<
        CharactersData[]
    >([
        {
            name: "",
            gender: "",
            id: "",
            image: "",
            species: "",
            status: "",
        },
    ]);
    const [isModalOpen, setModalOpen] = useState(false);
    const [characterSelected, setCharacterSelected] = useState<CharactersData>({
        name: "",
        gender: "",
        id: "",
        image: "",
        species: "",
        status: "",
    });
    const { image, name, gender, species, status } = characterSelected;

    const handleOpenModal = (character: CharactersData) => {
        setModalOpen(true);
        setCharacterSelected(character);
    };
    useEffect(() => {
        const newList = charactersList.slice(0, Number(limite));
        setCharactersListLimited(newList);
    }, [limite, charactersList]);
    return (
        <CardsContainer>
            <ModalContainer isOpen={isModalOpen}>
                <CharacterImage src={image} />
                <TitleAndContentContainer>
                    <ModalTitleContainer>
                        <ModalTitle>{name}</ModalTitle>
                        <ModalSubline />
                    </ModalTitleContainer>
                    <ModalContentContainer>
                        <Content>Gênero {gender}</Content>
                        <Content>Espécie {species}</Content>
                        <Content>Status {status}</Content>
                    </ModalContentContainer>
                </TitleAndContentContainer>
                <CloseButton onClick={() => setModalOpen(false)}>
                    <div
                        style={{
                            paddingBottom: "20px",
                            position: "relative",
                            bottom: "20px",
                        }}
                    >
                        ×
                    </div>
                </CloseButton>
            </ModalContainer>
            <CharactersListContainer>
                {charactersListLimited.length > 1 &&
                    charactersListLimited.map((character, index) => {
                        const { name, image } = character;
                        return (
                            <div key={index}>
                                <CardElement
                                    onClick={() => handleOpenModal(character)}
                                    url={image}
                                >
                                    <CardTextInfo>{name}</CardTextInfo>
                                </CardElement>
                            </div>
                        );
                    })}
            </CharactersListContainer>
            {limite !== "20" && (
                <div style={{ width: "100%", height: "80vh" }}></div>
            )}
        </CardsContainer>
    );
};

export default ListCharacters;
