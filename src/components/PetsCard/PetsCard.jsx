export default function PetsCard({ pet }) {
    return (       
<div className="card" key={pet.id}>
    <li>Name: {pet.pet}</li>
    <li>D.O.B:{pet.firstYear}</li>
    <li>D.O.D:{pet.lastYear} </li>
    <button></button>
</div>
);
}