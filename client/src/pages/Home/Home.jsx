import React from "react";
import Categories from "../../components/Categories/Categories";
import Mailing from "../../components/Mailing/Mailing";
import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider/Slider";
import Cart from "../../components/Cart/Cart";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Categories />
      <Featured type="trending" />
      <Mailing />
    </div>
  );
};

export default Home;
