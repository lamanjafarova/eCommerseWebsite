import HomePageMain from "./homepage/home";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HeaderTop from "./layouts/header-top";
import "./swiper.carusel.scss";
import "./swiper.bestseller.scss"
import { Route, Routes } from "react-router-dom";
import ProductsDeatil from "./pages/details";
import { useState } from "react";
import ShoppingBasket from "./pages/basket";
import SellerDetail from "./pages/seller-detail";

function App() {
  const [addBasket, setAddBasket] = useState([])
  const [count, setCount] = useState(0)
  return (
    <div className="App">
      <HeaderTop />
      <Header count={count} />
      <Routes>
        <Route path="/" element={ <HomePageMain addBasket={addBasket} setAddBasket={setAddBasket} count={count} setCount={setCount}/>} />
        <Route path="/add-basket" element={<ShoppingBasket addBasket={addBasket} setAddBasket={setAddBasket} count={count} setCount={setCount} />} />
        <Route path="/featured-detail/:id" element={<ProductsDeatil addBasket={addBasket} setAddBasket={setAddBasket} count={count} setCount={setCount}/>}/>
        <Route path="/seller-detail/:id" element={<SellerDetail />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
