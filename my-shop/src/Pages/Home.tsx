import { useEffect } from "react";
import Brands from "../components/Brands";
import Footer from "../components/Footer";
import MostRecentlyViewed from "../components/MostRecentlyViewed";
import NewArivals from "../components/NewArivals";
import Slider from "../components/Slider";

const Home = () => {

    useEffect(() => {
      window.scrollTo(0, 0);
    });
  return (
    <>
      <Slider />
      <NewArivals />
      <Brands/>
      <MostRecentlyViewed/>
      <Footer />
    </>
  );
};

export default Home;
