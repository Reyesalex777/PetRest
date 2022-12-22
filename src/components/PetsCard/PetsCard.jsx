import { useNavigate } from "react-router-dom";
import './PetsCard.css';

export default function PetsCard({ pet, handleDeletePet }) {

    const navigate = useNavigate();

    return (       
<div className="card" key={pet.id}>
    <li>Name: {pet.pet}</li>
    <li>D.O.B:{pet.firstYear}</li>
    <li>D.O.D:{pet.lastYear} </li>
    <button onClick={() => handleDeletePet(pet._id)}>Delete</button>
    <button onClick={() => navigate(`/pets/edit/${pet._id}`)}>Edit</button>
</div>
);
}