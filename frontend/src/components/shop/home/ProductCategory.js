import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const ProductCategory = (props) => {
  const images = [
    "./image/about-01.jpg",
    "./image/about-02.jpg",
    "./image/gallery-03.jpg",
    "./image/gallery-02.jpg",
  ];
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <div className="py-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {images.map((img, index) => (
          <div className="col-span-1 m-2 flex flex-col items-center justify-center space-y-2 cursor-pointer border shadow-lg rounded  ">
            <img
              className="fix-image-categories object-center cursor-pointer  rounded-top image-intro"
              key={index}
              src={img}
            />
          </div>
        ))}
      </div>
      {/* <ProductCategoryDropdown /> */}
    </Fragment>
  );
};

export default ProductCategory;
