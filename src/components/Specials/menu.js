import GreekSalad from "../../assets/images/greek-salad.jpg";
import Bruschetta from "../../assets/images/bruschetta.jpg";
import LemonDessert from "../../assets/images/lemon-dessert.jpg";

const menu = [
  {
    title: "Greek salad",
    price: "$12.99",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
    food_image: GreekSalad,
  },
  {
    title: "Bruschetta",
    price: "$5.99",
    description: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    food_image: Bruschetta,
  },
  {
    title: "Lemon Dessert",
    price: "$5.00",
    description:
      "This comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    food_image: LemonDessert,
  },
];

export default menu;
