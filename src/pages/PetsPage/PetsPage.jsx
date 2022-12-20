// import { checkToken } from '../../utilities/users-service';
// import { petsAPI } from '../../utilities/pets-api';
import './PetsPage.css';
import SinglePet from '../SinglePet/SinglePet';
import { useState } from 'react';

export default function PetsPage() {
  // async function handleCheckToken() {
  //   const expDate = await checkToken();
  //   console.log(expDate);
  // }
  const [pets, setPets] = useState([
    {pet: 'dude', firstYear:'1990', lastYear:'2001', description:'Good dude', id: 1 },
    {pet: 'dudeman', firstYear:'2000', lastYear:'2011', description:'Bad dude', id: 2 },
  ]);

  const handleDelete = (id) => {
    const newPets = pets.filter(pet => pet.id !== id)
    setPets(newPets);
  }

  const pet = pets.map((p) => <SinglePet pet={p} key={p.id} />);

  // useEffect(function() {
  //   async function getPets() {
  //     const pets = await petsAPI.getAll();
  //     setPets(pets);
  //   } 
  //   getPets();
  // }, []);


  return (
   <SinglePet pet={pet} handleDelete={handleDelete} />
  );
}
/* This is the page for all pets who are asleep
Below this should be tile that display image and name 
each tile should be clickable and have detail page with 
images(image carrisel is icebox also maybe a change cover image option),
dates(which display years pet was),
description(this is up to the families descresion).
All pets should be displayed in a grid on the home(pets) page. */