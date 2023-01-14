const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const port = 8080;

let sellers = [
    {
        id: 1,
        brend: "The Northland",
        name: "Sports Tops",
        price: "160.00",
        rating: 2,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/4-2_220x220.jpg?v=1635925793",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-4_220x220.jpg?v=1635925793",
    },
    {
        id: 2,
        brend: "Nike",
        name: "Casual Convinient Shoes",
        price: "160.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/2-12_540x.jpg?v=1635927304",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-10_220x220.jpg?v=1635927304",
    },
    {
        id: 3,
        brend: "Nike",
        name: "Millitary Leather Shoes",
        price: "160.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-11_220x220.jpg?v=1635927826",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-12_220x220.jpg?v=1635927826",
    },
    {
        id: 4,
        brend: "Converse",
        name: "Converse blue training shoes",
        price: "30.00-50.00",
        rating: 2,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-12-1_220x220.jpg?v=1621925141",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-12-2_220x220.jpg?v=1621925141",
    },
    {
        id: 5,
        brend: "Nike",
        name: "Vans Black all star trainer shoes",
        price: "98.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/2-8_220x220.jpg?v=1635928568",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-8_220x220.jpg?v=1635928569",
    },
    {
        id: 6,
        brend: "Gym",
        name: "Men’s Lift",
        price: "50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-9_220x220.jpg?v=1635929962",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/2-10_220x220.jpg?v=1635929962",
    },
    {
        id: 7,
        brend: "Nike",
        name: "Beyond Riode Original T-Shirt",
        price: "50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-10_6d4e6993-ca6c-4d12-8f58-27c8c348fa86_220x220.jpg?v=1635931562",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-11_9f0ab876-c0bb-4b92-895b-338f1e313cc8_220x220.jpg?v=1635931562",
    },
    {
        id: 8,
        brend: "Nike",
        name: "Women’s Brown leather backpacks",
        price: "50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-12_220x220.jpg?v=1635931697",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-13_220x220.jpg?v=1635931696",
    },
]
let featured = [
    {
        id: 9,
        brend: "SLS",
        name: "Solid pattern in fashion summer dress",
        price: "340.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-1-1_220x220.jpg?v=1621906918",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-1-3_220x220.jpg?v=1621906927",
    },
    {
        id: 10,
        brend: "SLS",
        name: "Mackintosh Poket backpack",
        price: "180.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-2-1_220x220.jpg?v=1621923967",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-2-2_220x220.jpg?v=1621923967",
    },
    {
        id: 11,
        brend: "Converse",
        name: "Converse blue training shoes",
        price: "30.00-50.00",
        rating: 2,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-12-1_220x220.jpg?v=1621925141",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-12-2_220x220.jpg?v=1621925141",
    },
    {
        id: 12,
        brend: "Handmade",
        name: "Fashionable Overnight Bag",
        price: "30.00-50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/10-1_220x220.jpg?v=1621925983",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/10-3_220x220.jpg?v=1621925983",
    },
    {
        id: 13,
        brend: "The Northland",
        name: "Women Red Fur Overcoat",
        price: "184.00",
        rating: 4,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-3-1-800x900_220x220.jpg?v=1624258539",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-3-2-800x900_220x220.jpg?v=1624258539",
    },
    {
        id: 14,
        brend: "The Northland",
        name: "Fashion Electric Wrist Watch",
        price: "184.00",
        rating: 5,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-4-1-800x900_220x220.jpg?v=1624264410",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-4-2-800x900_220x220.jpg?v=1624264410",
    },
    {
        id: 15,
        brend: "Pauline Deltour",
        name: "Hand Electric Cell",
        price: "26.00",
        rating: 3,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-5-1-800x900_220x220.jpg?v=1624325587",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-5-2-800x900_220x220.jpg?v=1624325587",
    },
    {
        id: 16,
        brend: "Pauline Deltour",
        name: "Converse Season Shoes",
        price: "135.62",
        rating: 5,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-11-1-800x900.jpg?v=1624439046",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-11-2-800x900.jpg?v=1624439046",
    },
] 
let products = [
    {
        id: 1,
        brend: "The Northland",
        name: "Comfortable Brown Scarf",
        price: "47.34",
        rating: 4,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-2-1-800x900_240x.jpg?v=1626750279",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-2-3-800x900_220x220.jpg?v=1626750279",
    },
    {
        id: 2,
        brend: "Molla",
        name: "Chuck Taylor All Star",
        price: "50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/M9166_D_107X1_2ea331a2-f877-41f4-8f34-a4008c1ca7b3_220x220.jpg?v=1628213376",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/M9166_A_107X1_3589b5fc-e992-4aa8-a757-e6419d062015_220x220.jpg?v=1628213376",
    },
    {
        id: 3,
        brend: "Nike",
        name: "Beyond Riode Original T-Shirt",
        price: "50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/1-10_6d4e6993-ca6c-4d12-8f58-27c8c348fa86_220x220.jpg?v=1635931562",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/3-11_9f0ab876-c0bb-4b92-895b-338f1e313cc8_220x220.jpg?v=1635931562",
    },
    {
        id: 4,
        brend: "Pauline Deltour",
        name: "Hand Electric Cell",
        price: "26.00",
        rating: 3,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-5-1-800x900_220x220.jpg?v=1624325587",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-5-2-800x900_220x220.jpg?v=1624325587",
    },
    {
        id: 5,
        brend: "Pauline Deltour",
        name: "Converse Season Shoes",
        price: "135.62",
        rating: 5,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-11-1-800x900.jpg?v=1624439046",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-11-2-800x900.jpg?v=1624439046",
    },
    {
        id: 6,
        brend: "The Northland",
        name: "Fashion Women Handbag",
        price: "83.29",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-6-1-800x900.jpg?v=1626751019",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-6-2-800x900.jpg?v=1626751021",
    },
    {
        id: 7,
        brend: "Pauline Deltour",
        name: "Season Sports Blue Sneaker",
        price: "93.14",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-14-1-800x900_720x.jpg?v=1624504168",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-14-2-800x900_720x.jpg?v=1624504168",
    },
    {
        id: 8,
        brend: "SLS",
        name: "Solid pattern in fashion summer dress",
        price: "340.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-1-1_220x220.jpg?v=1621906918",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-1-3_220x220.jpg?v=1621906927",
    },
    {
        id: 9,
        brend: "Handmade",
        name: "Fashionable Overnight Bag",
        price: "30.00-50.00",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/10-1_220x220.jpg?v=1621925983",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/10-3_220x220.jpg?v=1621925983",
    },
    {
        id: 10,
        brend: "The Northland",
        name: "Fashion Electric Wrist Watch",
        price: "184.00",
        rating: 5,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-4-1-800x900_220x220.jpg?v=1624264410",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-4-2-800x900_220x220.jpg?v=1624264410",
    },
    {
        id: 11,
        brend: "SkillStar",
        name: "Women Beautiful Clothing",
        price: "83.21",
        rating: 0,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-10-1-800x900.jpg?v=1626771386",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-10-2-800x900.jpg?v=1626771386",
    },
    {
        id: 12,
        brend: "SkillStar",
        name: "Women’s Fashional Handbag",
        price: "52.62",
        rating: 5,
        imgUrlOne: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-8-1-800x900_720x.jpg?v=1626768508",
        imgUrlTwo: "https://cdn.shopify.com/s/files/1/0568/7902/2234/products/product-8-3-800x900_720x.jpg?v=1626768508",
    },


]
app.use(cors());
app.use(bodyParser.json());
app.get("/sellers", (req, res) => {
    res.send(sellers);
  });
app.get("/sellers/:id", (req, res) => {
    const id = req.params.id;
    const selectedSellers = sellers.find((seller) => seller.id == id);
    if (selectedSellers) {
      res.send(selectedSellers);
      res.status(200);
    } else {
      console.log("there is no such user");
      res.status(404).json({ message: "there is no such user.." });
    }
  });
app.get("/featured", (req, res) => {
    res.send(featured)
})
app.get("/featured/:id", (req, res) => {
    const id = req.params.id;
    const selectedFeatured = featured.find((feature) => feature.id == id);
    if (selectedFeatured) {
      res.send(selectedFeatured);
      res.status(200);
    } else {
      console.log("there is no such user");
      res.status(404).json({ message: "there is no such user.." });
    }
  });
app.get("/products", (req, res) => {
    res.send(products)
})
app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const selectedProducts= products.find((product) => product.id == id);
    if (selectedProducts) {
      res.send(selectedProducts);
      res.status(200);
    } else {
      console.log("there is no such user");
      res.status(404).json({ message: "there is no such user.." });
    }
  });
app.listen(port, () => {
    console.log(`http://localhost:${port}/sellers`)
    console.log(`http://localhost:${port}/featured`)
    console.log(`http://localhost:${port}/products`);
  })
