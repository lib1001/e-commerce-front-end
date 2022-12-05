import React from "react";
import Categories from "../../components/Categories/Categories";
import Featured from "../../components/Featured/Featured";
import Slider from "../../components/Slider/Slider";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <Featured type="featured" />
      <Categories />
      <Featured type="trending" />
    </div>
  );
};

export default Home;
