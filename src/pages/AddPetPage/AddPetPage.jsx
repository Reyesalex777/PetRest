import { useState } from 'react';
import './AddPetPage.css';
import { useNavigate } from 'react-router-dom';
export default function AddPetPage({ handleAddPet }) {

  const [newpet, setnewPet] = useState({
    pet: "",
    firstYear: "",
    lastYear: "",
    description: ""
  })

  const navigate = useNavigate();

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
    navigate('/pets');
  }

  return (
// form to add a pet
    <>
    <h1>Add your Pet</h1>
  <div className='container'>
    <form onSubmit={handleSubmit}>
      <div className='addInputs'>
      <input type="text" name='firstYear' value={newpet.firstYear} placeholder="First Year" onChange={handleChange} />
      <input type="text" name='pet' value={newpet.pet} placeholder="Name" onChange={handleChange} required  />
      <input type="text" name='lastYear' value={newpet.lastYear} type="text" placeholder="Last Year" onChange={handleChange} />
      <textarea className='addtxt' type="text" name='description' value={newpet.description} placeholder='Say a few words or your favorite story with them' onChange={handleChange} ></textarea>
      <button className='addbtn' type="submit">Add</button>
      </div>
    </form>
  </div>
  </>
  );
}