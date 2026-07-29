import apples from "../assets/fruits_and_vegetables/apples.jpg";
import tomato from "../assets/fruits_and_vegetables/tomato.jpg";
import bread from "../assets/bakery/bread.jpg";
import buns from "../assets/bakery/buns.jpg";
import eggs from "../assets/dairy_and_eggs/eggs.jpg";
import milk from "../assets/dairy_and_eggs/milk.jpg";
import sanitizer from "../assets/personal_care/sanitizer.jpg";
import shampoo from "../assets/personal_care/shampoo.jpg";
import rice from "../assets/rice_flour_pulses/rice.jpg";
import flour from "../assets/rice_flour_pulses/flour.jpg";

const products = [
    {
        id: 1,
        name: "Apples",
        category: "Fruits & Vegetables",
        price: 350,
        image: apples,
    },
    {
        id: 2,
        name: "Tomato",
        category: "Fruits & Vegetables",
        price: 220,
        image: tomato,
    },
    {
        id: 3,
        name: "Bread",
        category: "Bakery",
        price: 180,
        image: bread,
    },
     {
        id: 4,
        name: "Buns",
        category: "Bakery",
        price: 180,
        image: buns,
    },
     {
        id: 5,
        name: "Eggs",
        category: "Dairy & Eggs",
        price: 180,
        image: eggs,
    },
     {
        id: 6,
        name: "Milk",
        category: "Dairy & Eggs",
        price: 180,
        image: milk,
    },
    {
        id: 7,
        name: "Sanitizer",
        category: "Personal Care",
        price: 380,
        image: sanitizer,
    },
    {
        id: 8,
        name: "Shampoo",
        category: "Personal Care",
        price: 580,
        image: shampoo,
    },
    {
        id: 9,
        name: "Rice",
        category: "Rice, Flour & Pulses",
        price: 250,
        image: rice,
    },
    {
        id: 10,
        name: "Flour",
        category: "Rice, Flour & Pulses",
        price: 450,
        image: flour,
    },
];

export default products;