import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'
import { Button } from 'react-bootstrap';

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
      <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
        <li className='nav-item'>
        <Link className='nav-link' style={{fontSize: "3vmin"}} to="/home">🐕</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' style={{fontSize: "2.5vmin"}} to="/pets">Pets</Link>
        </li>
        <li className='nav-item'>
        <Link className='nav-link' style={{fontSize: "2.5vmin"}} to="/pets/add">Memorialize 🖤</Link>
        </li>
      </ul>
    </div>
      <div className='d-flex align-items-center'>
        <span>Welcome, {user.name}</span>
        <Button to="" onClick={handleLogOut}>Log Out</Button>
      </div>
    </nav>
  );
}
