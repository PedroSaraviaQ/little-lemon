import Logo from "../../assets/images/logo.png";
import "./Header.css";

function Header() {
  return (
    <header>
      <img src={Logo} alt="Little Lemon's logo" />
      <ul>
        <li>Home</li>
        <li>About</li>
        <li>Menu</li>
        <li>Reservations</li>
        <li>Order Online</li>
        <li>Login</li>
      </ul>
    </header>
  );
}

export default Header;
