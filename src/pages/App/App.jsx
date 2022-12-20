import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
// import { getUser } from '../../utilities/users-service';
import './App.css';
import AuthPage from '../AuthPage/AuthPage';
import PetsPage from '../PetsPage/PetsPage';
import AddPetPage from '../AddPetPage/AddPetPage';
import HomePage from '../HomePage/HomePage';
import NavBar from '../../components/NavBar/NavBar';

export default function App() {
  const [user, setUser] = useState({}); //getUser());

  const pets = [
    {pet: 'dude', firstYear:'1990', lastYear:'2001', description:'Good dude'},
    {pet: 'man', firstYear:'2000', lastYear:'2014', description:'the man'},
    {pet: 'theDude', firstYear:'2003', lastYear:'2023', description:'bowler'},
  ];

  return (
    <main className="App">
      { user ?
            <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pets" element={<PetsPage pets={pets} />} />
              <Route path="/pets/add" element={<AddPetPage />} />
            </Routes>
            </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
