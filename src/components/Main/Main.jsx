import Banner from "../../assets/images/banner.jpg";
import Button from "../Button/Button";
import "./Main.css";

function Main() {
  return (
    <main>
      <section className="principal">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <Button>Reserve a Table</Button>
        </div>
        <img src={Banner} alt="Little Lemon Banner" />
      </section>
    </main>
  );
}

export default Main;
