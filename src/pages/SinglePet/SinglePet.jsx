// import { Pet } from '../../pages/PetsPage/PetsPage'
export default function SinglePet({ pet }) { 
    return (
        <div>
        <p>Name: {pet.pet}</p>
        <p>D.O.B:{pet.firstYear}</p>
        <p>D.O.D:{pet.lastYear} </p>
        <p>Destcription:{pet.description}</p>
        </div>
    );
}