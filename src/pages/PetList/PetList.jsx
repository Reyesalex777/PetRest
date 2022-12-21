import PetsCard from "../../components/PetsCard/PetsCard";

export default function PetList({ pets, handleDeletePet }) {
    const listedPets = pets && pets.map((p) => <PetsCard pet={p} handleDeletePet={handleDeletePet} />)

    return (
        <>
        {listedPets}
        </>
    );
}