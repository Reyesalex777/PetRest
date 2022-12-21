import { useState } from 'react';
import './AddPetPage.css';
export default function AddPetPage() {

  const [pet, setPet] = useState({
    pet: "",
    firstYear: "",
    lastYear: "",
    description: ""
  })

  function addPet(pet) {
    setPet([...pet, pet]);
  }
  
  function handleAddPet(e) {
    e.preventDefault();
    addPet(pet)
      console.log(pet)
  }

  return (
// form to add a pet
  <>
    <h1>Add your Pet</h1>
    <form onSubmit={handleAddPet} onChange={(e) => []}>
      <input className='firstYear' type="text" placeholder="First Year" pattern="\d{4, 4}" />
      <input className='name' type="text" placeholder="Name" required />
      <input className='lastYear' type="text" placeholder="Last Year" pattern="\d{4, 4}" />
      <textarea placeholder='Say a few words or your favorite story with them'></textarea>
      <button >Add</button>
    </form>
  </>
  );
}