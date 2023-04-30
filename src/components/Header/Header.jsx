import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header className="grid">
      <img src={Logo} alt="Little Lemon's logo" />
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>About</li>
        <li>Menu</li>
        <li>
          <Link to="/booking">Reservations</Link>
        </li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Header;
