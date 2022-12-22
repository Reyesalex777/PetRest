import { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PetList from '../../pages/PetList/PetList';
import AddPetPage from '../AddPetPage/AddPetPage';
import EditPetsPage from '../EditPetsPage/EditPetsPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import * as petsAPI from '../../utilities/pets-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [pets, setPets] = useState([]);

  const navigate = useNavigate();


  useEffect( function() {
    async function getPets() {
      const allPets = await petsAPI.getAll();
      setPets(allPets);
    }
    getPets();
  }, []);

  async function handleAddPet( newPet) {
    const pet = await petsAPI.createPet(newPet);
    setPets([...pets, pet])
  }

  async function handleDeletePet(id) {
    await petsAPI.deletePet(id);
    const remainingPets = pets.filter((pet) => pet._id !== id);
    setPets(remainingPets);
  }
  
  async function handleUpdatePet(petData, id) {
    const updatedPet = await petsAPI.updatePet(id, petData);
    setPets(updatedPet);
    navigate(`/pets`);
  }

  return (
    <main className="App">
      { user ?
            <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pets/edit/:id" element={<EditPetsPage pets={pets} handleUpdatePet={handleUpdatePet} />} />
              <Route path="/pets" element={<PetList pets={pets} setPets={ setPets } handleDeletePet={handleDeletePet} />} />
              <Route path="/pets/new" element={<AddPetPage handleAddPet={handleAddPet} />} />
            </Routes>
            </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
