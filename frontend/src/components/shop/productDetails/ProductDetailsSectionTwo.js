import React, { Fragment, useContext, useEffect, useState } from "react";
import AllReviews from "./AllReviews";
import ReviewForm from "./ReviewForm";

import { ProductDetailsContext } from "./";
import { LayoutContext } from "../layout";

import { isAuthenticate } from "../auth/fetchApi";

import "./style.css";

const Menu = () => {
  const { data, dispatch } = useContext(ProductDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);

  return (
    <Fragment>
      <div className="flex flex-col md:flex-row items-center justify-center">
        <div
          onClick={(e) => dispatch({ type: "menu", payload: true })}
          className={`${
            data.menu ? "border-b-2 border-yellow-700" : ""
          } px-4 py-3 cursor-pointer`}
        >
          Description
        </div>
        <div
          onClick={(e) => dispatch({ type: "menu", payload: false })}
          className={`${
            !data.menu ? "border-b-2 border-yellow-700" : ""
          } px-4 py-3 relative flex cursor-pointer`}
        >
          <span>Reviews</span>
          <span className="absolute text-xs top-0 right-0 mt-2 bg-yellow-700 text-white rounded px-1">
            {layoutData.singleProductDetail.pRatingsReviews.length}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

const RatingReview = () => {
  return (
    <Fragment>
      <AllReviews />
      {isAuthenticate() ? (
        <ReviewForm />
      ) : (
        <div className="mb-12 md:mx-16 lg:mx-20 xl:mx-24 bg-red-200 px-4 py-2 rounded mb-4">
          You need to login in for review
        </div>
      )}
    </Fragment>
  );
};

const ProductDetailsSectionTwo = (props) => {
  const { data } = useContext(ProductDetailsContext);
  const { data: layoutData } = useContext(LayoutContext);
  const [singleProduct, setSingleproduct] = useState({});

  useEffect(() => {
    setSingleproduct(
      layoutData.singleProductDetail ? layoutData.singleProductDetail : ""
    );

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Fragment>
      <section className="m-4 md:mx-12 md:my-8">
        <Menu />
        {data.menu ? (
          <div className="mt-6 mr-10 ml-10">
            <h5>🌸𝑻𝒓𝒂𝒏𝒔𝒍𝒂𝒕𝒆 𝒀𝒐𝒖𝒓 𝑺𝒑𝒂𝒄𝒆 𝒊𝒏𝒕𝒐 𝒂 𝑴𝒐𝒏𝒈𝒐𝒍𝒊𝒂𝒏 𝑶𝒂𝒔𝒊𝒔 🌸</h5>
            𝐸𝑙𝑒𝑣𝑎𝑡𝑒 𝑡ℎ𝑒 𝑚𝑜𝑜𝑑 𝑎𝑛𝑑 𝑣𝑖𝑏𝑒 𝑜𝑓 𝑦𝑜𝑢𝑟 𝑠𝑝𝑎𝑐𝑒 𝑤𝑖𝑡ℎ 𝑜𝑢𝑟 𝑒𝑛𝑐ℎ𝑎𝑛𝑡𝑖𝑛𝑔
            𝑓𝑟𝑎𝑔𝑟𝑎𝑛𝑐𝑒 𝑏𝑎𝑔𝑠. 𝑁𝑜𝑡 𝑜𝑛𝑙𝑦 𝑑𝑜 𝑡ℎ𝑒𝑦 𝑠𝑒𝑟𝑣𝑒 𝑎𝑠 𝑑𝑒𝑙𝑖𝑔ℎ𝑡𝑓𝑢𝑙 𝑑𝑒𝑐𝑜𝑟 𝑎𝑐𝑐𝑒𝑛𝑡𝑠,
            𝑏𝑢𝑡 𝑡ℎ𝑒𝑦 𝑎𝑙𝑠𝑜 𝑖𝑛𝑓𝑢𝑠𝑒 𝑦𝑜𝑢𝑟 𝑟𝑜𝑜𝑚 𝑤𝑖𝑡ℎ 𝑎 𝑠𝑒𝑛𝑠𝑒 𝑜𝑓 𝑡𝑟𝑎𝑛𝑞𝑢𝑖𝑙𝑖𝑡𝑦 𝑎𝑛𝑑
            𝑠𝑤𝑒𝑒𝑡𝑛𝑒𝑠𝑠. 𝐶𝑟𝑎𝑓𝑡𝑒𝑑 𝑓𝑟𝑜𝑚 𝑛𝑎𝑡𝑢𝑟𝑎𝑙 𝑓𝑙𝑜𝑤𝑒𝑟𝑠, ℎ𝑒𝑟𝑏𝑠, 𝑎𝑛𝑑 𝑒𝑥𝑞𝑢𝑖𝑠𝑖𝑡𝑒
            𝑖𝑛𝑔𝑟𝑒𝑑𝑖𝑒𝑛𝑡𝑠, 𝑒𝑎𝑐ℎ 𝑠𝑐𝑒𝑛𝑡 𝑝𝑟𝑜𝑚𝑖𝑠𝑒𝑠 𝑎 𝑔𝑒𝑛𝑡𝑙𝑒 𝑎𝑛𝑑 𝑟𝑒𝑣𝑖𝑡𝑎𝑙𝑖𝑧𝑖𝑛𝑔 𝑎𝑚𝑏𝑖𝑎𝑛𝑐𝑒,
            𝑤𝑒𝑙𝑐𝑜𝑚𝑖𝑛𝑔 𝑦𝑜𝑢 𝑤𝑖𝑡ℎ 𝑓𝑟𝑒𝑠ℎ𝑛𝑒𝑠𝑠 𝑒𝑣𝑒𝑟𝑦 𝑡𝑖𝑚𝑒 𝑦𝑜𝑢 𝑒𝑛𝑡𝑒𝑟 𝑦𝑜𝑢𝑟 𝑠𝑎𝑛𝑐𝑡𝑢𝑎𝑟𝑦.
            <h6>
              𝑇𝑟𝑎𝑛𝑠𝑓𝑜𝑟𝑚 𝑦𝑜𝑢𝑟 𝑙𝑖𝑣𝑖𝑛𝑔 𝑎𝑛𝑑 𝑤𝑜𝑟𝑘𝑖𝑛𝑔 𝑠𝑝𝑎𝑐𝑒𝑠 𝑖𝑛𝑡𝑜 𝑎 𝑝𝑜𝑒𝑡𝑖𝑐 𝑗𝑜𝑢𝑟𝑛𝑒𝑦
              𝑤𝑖𝑡ℎ 𝑡ℎ𝑒 𝑓𝑙𝑜𝑟𝑎𝑙 𝑒𝑙𝑒𝑔𝑎𝑛𝑐𝑒 𝑜𝑓 𝑜𝑢𝑟 𝑓𝑟𝑎𝑔𝑟𝑎𝑛𝑐𝑒 𝑏𝑎𝑔𝑠. 𝐸𝑥𝑝𝑙𝑜𝑟𝑒 𝑜𝑢𝑟 𝑠𝑡𝑜𝑟𝑒
              𝑡𝑜𝑑𝑎𝑦 𝑡𝑜 𝑑𝑖𝑠𝑐𝑜𝑣𝑒𝑟 𝑎𝑛𝑑 𝑖𝑚𝑚𝑒𝑟𝑠𝑒 𝑦𝑜𝑢𝑟𝑠𝑒𝑙𝑓 𝑖𝑛 𝑡ℎ𝑒 𝑚𝑎𝑔𝑖𝑐𝑎𝑙 𝑒𝑥𝑝𝑒𝑟𝑖𝑒𝑛𝑐𝑒𝑠
              𝑒𝑎𝑐ℎ 𝑠𝑐𝑒𝑛𝑡 𝑏𝑟𝑖𝑛𝑔𝑠! 🌺
            </h6>
            👉𝑫𝒊𝒎𝒆𝒏𝒔𝒊𝒐𝒏𝒔: 10𝒙14 𝒄𝒎
          </div>
        ) : (
          <RatingReview />
        )}
      </section>
      <div className="m-4 md:mx-8 md:my-6 flex justify-center capitalize font-light tracking-widest bg-white border-t border-b text-gray-800 px-4 py-4 space-x-4">
        <div>
          <span>Category :</span>
          <span className="text-sm text-gray-600">
            {" "}
            {singleProduct.pCategory ? singleProduct.pCategory.cName : ""}
          </span>
        </div>
      </div>
    </Fragment>
  );
};

export default ProductDetailsSectionTwo;
