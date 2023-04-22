import Button from "../CallToAction/Button";
import menu from "./menu";
import Delivery from "../../assets/images/delivery.svg";
import "./Specials.css";
import "./cards.css";

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
              <span>Order a delivery</span>
              <img src={Delivery} alt="" height="21px" />
            </div>
          </article>
        ))}
      </section>
    </section>
  );
}

export default Specials;
