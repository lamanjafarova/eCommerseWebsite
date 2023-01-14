import HomePageMain from "./homepage/home";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HeaderTop from "./layouts/header-top";
import "./swiper.carusel.scss";
import "./swiper.bestseller.scss"
import { Route, Routes } from "react-router-dom";
import ProductsDeatil from "./pages/details";

function App() {
  return (
    <div className="App">
      <HeaderTop />
      <Header />
      <Routes>
        <Route path="/" element={ <HomePageMain />} />
        <Route path="/featured-detail/:id" element={<ProductsDeatil />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
