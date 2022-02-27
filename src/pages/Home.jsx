import React from "react";
import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Menu from "../components/Menu/Menu";
import Newsletter from "../components/Newsletter";
import Products from "../components/Products";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div>
      <Menu />
      <Carousel />
      <Categories />
      <Products/>
      <Newsletter/>
      <Footer/>
    </div>
  );
};

export default Home;