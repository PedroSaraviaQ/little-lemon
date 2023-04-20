import Banner from "../../assets/images/banner.jpg";
import "./Main.css";

function Main() {
  return (
    <main>
      <section className="principal">
        <div>
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
          <button>Reserve a Table</button>
        </div>
        <img src={Banner} alt="" />
      </section>
    </main>
  );
}

export default Main;
