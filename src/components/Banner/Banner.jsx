import BannerImage from "../../assets/images/banner.jpg";
import Button from "../CallToAction/Button";
import "./Banner.css";

function Banner() {
  return (
    <section className="banner">
      <article>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>We are a family owned Mediterranean restaurant, focused on traditional recipes served with a modern twist.</p>
      </article>
      <img src={BannerImage} alt="Little Lemon Banner" />
      <Button>Reserve a Table</Button>
    </section>
  );
}

export default Banner;
