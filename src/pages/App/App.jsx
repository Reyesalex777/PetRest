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

  return (
    <main className="App">
      { user ?
            <>
            <NavBar user={user} setUser={setUser} />
            <Routes>
              {/* Route components in here */}
              <Route path="/" element={<HomePage />} />
              <Route path="/pets" element={<PetsPage />} />
              <Route path="/pets/add" element={<AddPetPage />} />
            </Routes>
            </>
          :
          <AuthPage setUser={setUser} />
      }
    </main>
  );
}
