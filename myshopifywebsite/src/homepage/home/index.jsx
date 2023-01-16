import React from 'react'
import FeaturedArticles from '../components/articles'
import BestSellers from '../components/best.sellers'
import MainHomeCarusel from '../components/carusel'
import OurCategories from '../components/categories'
import OurFeatured from '../components/our-featured'
import ProductsFooter from '../components/products.footer'
import SectionInformation from '../components/section.about'
import SectionBackground from '../components/section.background'
import { SponsorLogo } from '../components/sponsor.logo'
import "../home/index.scss"

const HomePageMain = ({ addBasket, setAddBasket }) => {
  return (
    <div>
        <MainHomeCarusel />
        <div className="about">
            <div className="shipping_and_return">
            <i className="fa-solid fa-truck-fast"></i>
            <div className="text_shipping_return">
                <h3>Free Shipping & Return</h3>
                <p>Free shipping on orders over $99</p>
            </div>
            </div>
            <div className="customer_support">
            <i className="fa-solid fa-handshake"></i>
            <div className="text_customer_support">
                <h3>Customer Support 24/7</h3>
                <p>Instant access to perfect support</p>
            </div>
            </div>
            <div className="secure_payment">
            <i className="fa-solid fa-wallet"></i>
            <div className="text_secure_payment">
                <h3>100% Secure Payment</h3>
                <p>We ensure secure payment!</p>
            </div>
            </div>
        </div>
        <OurCategories />
        <BestSellers addBasket={addBasket} setAddBasket={setAddBasket}/>
        <SectionInformation />
        <OurFeatured addBasket={addBasket} setAddBasket={setAddBasket}/>
        <SectionBackground />
        <FeaturedArticles />
        <SponsorLogo />
        <ProductsFooter />
    </div>
  )
}

export default HomePageMain