import Button from "../CallToAction/Button";
import menu from "./menu";
import "./Specials.css";

function Specials() {
  return (
    <section className="specials grid">
      <h1>This weeks specials!</h1>
      <Button>Online Menu</Button>
      <section className="cards">
        {menu.map((m) => (
          <article key={m.title}>
            <img src={m.food_image} alt={m.title} />
            <h2>{m.title}</h2>
            <span>{m.price}</span>
            <p>{m.description}</p>
            <div>
              <p>Order a delivery</p>
              <img src="" alt="" />
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Specials;
