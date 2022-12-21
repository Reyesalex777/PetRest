import './PetsPage.css';
import PetList from '../PetList/PetList';

export default function PetsPage({ pets, setPets  }) {
  const handleDelete = (id) => {
    const newPets = pets.filter(pet => pet.id !== id)
    setPets(newPets);
  }


  // useEffect(function() {
  //   async function getPets() {
  //     const pets = await petsAPI.getAll();
  //     setPets(pets);
  //   } 
  //   getPets();
  // }, []);

  return (
    <PetList pets={pets} name="All Pets" handleDelete={handleDelete} />
  );
}
/* This is the page for all pets who are asleep
Below this should be tile that display image and name 
each tile should be clickable and have detail page with 
images(image carrisel is icebox also maybe a change cover image option),
dates(which display years pet was),
description(this is up to the families descresion).
All pets should be displayed in a grid on the home(pets) page. */