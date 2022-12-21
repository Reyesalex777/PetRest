import PetsCard from "../../components/PetsCard/PetsCard";

export default function PetList({ pets }) {
    const listedPets = pets && pets.map((p) => <PetsCard pet={p} />)

    return (
        <>
        {listedPets}
        </>
    );
}