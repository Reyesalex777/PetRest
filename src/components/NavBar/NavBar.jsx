import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import './NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <section>
    <nav className='navbar'>
      <button class="navbar-toggler" type="button" data-mdb-toggle="collapse"
        data-mdb-target="#navbarToggleExternalContent4"
        aria-controls="navbarToggleExternalContent4" aria-expanded="false"
        aria-label="Toggle navigation">
        <i class="fas fa-bars"></i>
      </button>
      <ul>
        <li>
      <Link to="/pets">Pets</Link>
        </li>
        <li>
      <Link to="/pets/add">Add Pet</Link>
        </li>
      </ul>
      <span>Welcome, {user.name}</span>
      &nbsp;&nbsp;<Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </section>
  );
}
