import product_01_image_01 from "../images/product_01.jpg";
import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";
import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";
import product_03_image_01 from "../images/product_3.1.jpg";
import product_03_image_02 from "../images/product_3.2.jpg";
import product_03_image_03 from "../images/product_3.3.jpg";
import product_04_image_01 from "../images/product_4.1.jpg";
import product_04_image_02 from "../images/product_4.2.jpg";
import product_04_image_03 from "../images/product_4.3.png";

const products = [
  {
    id: "01",
    title: "Chicken Burger",
    price: 240,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia.",
  },
  {
    id: "02",
    title: "Hawaiian Pizza",
    price: 350,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Pizza",
    desc: "Includes ham and pineapple",
  },
  {
    id: "03",
    title: "Pepperoni",
    price: 200,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Pizza",
    desc: "Topped with pepperoni slices and mozzarella",
  },
  {
    id: "04",
    title: "Veggie Supreme",
    price: 190,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Pizza",
    desc: "Loaded with bell peppers, olives, mushrooms, and onions",
  },
  // Removed the Cheese Burger product
  {
    id: "06",
    title: "Mutton Cheese Burger",
    price: 300,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
    category: "Burger",
    desc: "A premium burger with extra cheese and a special sauce.",
  },
  {
    id: "07",
    title: "Four Cheese Pizza",
    price: 290,
    image01: product_02_image_02,
    image02: product_02_image_01,
    image03: product_02_image_03,
    category: "Pizza",
    desc: "Mozzarella, Parmesan, Gorgonzola, and Fontina.",
  },
  {
    id: "08",
    title: "Mushroom Truffle Pizza",
    price: 390,
    image01: product_03_image_02,
    image02: product_03_image_01,
    image03: product_03_image_03,
    category: "Pizza",
    desc: "White sauce, a mix of mushrooms, mozzarella, and a drizzle of truffle oil.",
  },
  {
    id: "09",
    title: "Mushroom Spinach Alfredo",
    price: 470,
    image01: product_04_image_02,
    image02: product_04_image_01,
    image03: product_04_image_03,
    category: "Pizza",
    desc: "Alfredo sauce, baby spinach, mushrooms, and a blend of cheeses.",
  },
];

export default products;
