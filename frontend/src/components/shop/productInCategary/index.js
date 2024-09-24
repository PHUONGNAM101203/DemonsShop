import React, { Fragment, createContext, useReducer } from "react";
import Layout from "../layout";
import Slider from "./Slider";
import ProductCategory from "./ProductCategory";
import { homeState, homeReducer } from "./HomeContext";
import SingleProduct from "./SingleProduct";
// import FollowONIG from "./FollowMe";

export const HomeContext = createContext();

const HomeComponent = () => {
  return (
    <Fragment>
      <div className="">
      <Slider />
      {/* Category, Search & Filter Section */}
      <section className="md:mx-8 md:my-6  pt-3 pl-2 pr-2 pb-3">
        <ProductCategory />
      </section>
      {/* Product Section */}
      <section className="m-4 md:mx-8  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <SingleProduct />
      </section>
      {/* <section className="m-4 md:mx-8 md:my-6 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        <FollowONIG />
      </section> */}
      </div>
 
    </Fragment>
  );
};

const Product = (props) => {
  const [data, dispatch] = useReducer(homeReducer, homeState);
  return (
    <Fragment>
      <HomeContext.Provider value={{ data, dispatch }}>
        <Layout children={<HomeComponent />} />
      </HomeContext.Provider>
    </Fragment>
  );
};

export default Product;
