import Brands from "../components/Brands";
import Footer from "../components/Footer";
import MostRecentlyViewed from "../components/MostRecentlyViewed";
import NewArivals from "../components/NewArivals";
import Slider from "../components/Slider";

const Home = () => {
  const imagesSlider= [
      'https://themewagon.github.io/coloshop/images/slider_1.jpg',
  
    ]
  return (
    <>
      <Slider images={imagesSlider} />
      <NewArivals />
      <Brands/>
      <MostRecentlyViewed/>
      <Footer />
    </>
  );
};

export default Home;
