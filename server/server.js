const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 8080;

let productsone = [
    {
        id: 1,
        name: "The Northland",
        description: "Sports Tops",
        price: 160.00,
        imgUrl: {
            optionOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/4-2_220x220.jpg?v=1635925793",
            optionTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-4_220x220.jpg?v=1635925793",
        }
    },
    {
        id: 2,
        name: "Nike",
        description: "Casual Convinient Shoes",
        price: 160.00,
        imgUrl: {
            optionOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/4-2_220x220.jpg?v=1635925793",
            optionTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-4_220x220.jpg?v=1635925793",
        }
    },
    {
        id: 3,
        name: "The Northland",
        description: "Sports Tops",
        price: 160.00,
        imgUrl: {
            optionOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/4-2_220x220.jpg?v=1635925793",
            optionTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-4_220x220.jpg?v=1635925793",
        }
    }
]


app.listen(port, () => {
    console.log(`http://localhost:${port}/products`)
  })