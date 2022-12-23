import { useParams } from "react-router-dom";
import { useState } from "react";
import './EditPetsPage.css';

export default function EditPetsPage({ pets, handleUpdatePet }) {
    const { id } = useParams();
    let updatedPet = pets.find((pet) => pet._id === id);
    const [editPet, setEditPet] = useState({updatedPet});
    if (!updatedPet) return null;

    function handleChange(evt) {
        setEditPet({...editPet, [evt.target.name]: evt.target.value});
    }

    function handleSubmit(evt) {
        evt.preventDefault();
        handleUpdatePet(editPet, id);
    }

    return (
        <>
        <h1>Edit</h1>
        <div className='container'>
        <form onSubmit={handleSubmit} >
          <div className='addInputs'>
          <input name='firstYear' value={editPet.firstYear} type="text" placeholder="First Year" onChange={handleChange} />
          <input name='pet' value={editPet.pet}  type="text" placeholder="Name" onChange={handleChange} required  />
          <input name='lastYear' value={editPet.lastYear} type="text" placeholder="Last Year" onChange={handleChange} />
          <textarea className='addtxt' name='description' value={editPet.description} placeholder='Say a few words or your favorite story with them' onChange={handleChange} ></textarea>
          <button className='addbtn' type="submit">Edit</button>
          </div>
        </form>
          </div>
      </>
    )
}