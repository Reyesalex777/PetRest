import { useState } from 'react';
import './AddPetPage.css';
export default function AddPetPage({ handleAddPet }) {

  const [newpet, setnewPet] = useState({
    pet: "",
    firstYear: "",
    lastYear: "",
    description: ""
  })

  function handleChange(e) {
    setnewPet({...newpet, [e.target.name]: e.target.value });
  }
  
  function handleSubmit(e) {
    e.preventDefault();
    handleAddPet(newpet);
    setnewPet({
      pet: "",
      firstYear: "",
      lastYear: "",
      description: ""
    });
  }

  return (
// form to add a pet
  <>
    <h1>Add your Pet</h1>
    <form onSubmit={handleSubmit}>
      <input className='firstYear' name='firstYear' value={newpet.firstYear} type="text" placeholder="First Year" onChange={handleChange} />
      <input className='name' name='pet' value={newpet.pet}  type="text" placeholder="Name" onChange={handleChange} required  />
      <input className='lastYear' name='lastYear' value={newpet.lastYear} type="text" placeholder="Last Year" onChange={handleChange} />
      <textarea name='description' value={newpet.description} placeholder='Say a few words or your favorite story with them' onChange={handleChange} ></textarea>
      <button type="submit">Add</button>
    </form>
  </>
  );
}