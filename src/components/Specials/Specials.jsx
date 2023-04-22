import Button from "../CallToAction/Button";
import menu from "./menu";
import "./Specials.css";

function Specials() {
  return (
    <section className="specials">
      <h2>This weeks specials!</h2>
      <Button>Online Menu</Button>
      <section className="cards">
        {menu.map((m) => (
          <article key={m.title}>
            <h3>{m.title}</h3>
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
