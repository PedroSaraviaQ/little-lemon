import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="grid">
      <img src="" alt="" />
      <div className="links">
        <div className="navigation">
          <h3>
            Doormat
            <br />
            Navigation
          </h3>
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
        </div>
        <div className="contact">
          <h3>Contact</h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
        <div className="media">
          <h3>
            Social <br />
            Media Links
          </h3>
          <ul>
            <li>Address</li>
            <li>Phone Number</li>
            <li>Email</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
