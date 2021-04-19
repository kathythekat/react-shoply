import { Link, NavLink } from 'react-router-dom';
import "./NavBar.css";

function NavBar() {

  return (
    <nav className="NavBar">
      <Link className="home" to="/">Home</Link>
      <div className="NavBarRight">
        <NavLink to="/cart">Cart</NavLink>
      </div>
    </nav>
  );
}
export default NavBar;