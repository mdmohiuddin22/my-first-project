import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Category from "../Category/Category";
import Featured from "../Featured/Featured";
import PopularMenu from "./PopularMenu/PopularMenu";
import Testmonials from "./Testmonials/Testmonials";


const Home = () => {
    return (
        <div>
              <Helmet>
        <title>Bistro Boss Resturant</title>
      </Helmet>
          <Banner></Banner>
          <Category></Category>
          <PopularMenu></PopularMenu>
          <Featured></Featured>
          <Testmonials></Testmonials>
        </div>
    );
};

export default Home;