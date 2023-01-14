import HomePageMain from "./homepage/home";
import Footer from "./layouts/footer";
import Header from "./layouts/header";
import HeaderTop from "./layouts/header-top";
import "./swiper.carusel.scss";
import "./swiper.bestseller.scss"

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTop />
      <HomePageMain />
      <Footer />
    </div>
  );
}

export default App;
