import './SinglePet.css';
export default function SinglePet({ pet, handleDelete }) { 
    return (
    <ul className='PetCard'>
        <li>
        <p>Name: {pet.pet}</p>
        <p>D.O.B:{pet.firstYear}</p>
        <p>D.O.D:{pet.lastYear} </p>
        <p>Destcription:{pet.description}</p>
        <button onClick={() => handleDelete(pet.id)}>Delete</button>
        </li>
    </ul>

    );
}