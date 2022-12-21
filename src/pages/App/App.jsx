import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PetList from '../../pages/PetList/PetList';
import AddPetPage from '../AddPetPage/AddPetPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';
import * as petsAPI from '../../utilities/pets-api';

export default function App() {
  const [user, setUser] = useState(getUser());
  const [pets, setPets] = useState([]);



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
  

  return (
    <main className="App">
      { user ?
            <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pets" element={<PetList pets={pets} setPets={ setPets } />} />
              <Route path="/pets/new" element={<AddPetPage handleAddPet={handleAddPet} />} />
            </Routes>
            </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
