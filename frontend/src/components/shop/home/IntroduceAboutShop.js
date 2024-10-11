import React, { Fragment, useContext } from "react";
import ProductCategoryDropdown from "./ProductCategoryDropdown";
import { HomeContext } from "./index";

const IntroduceAboutShop = (props) => {
  const { data, dispatch } = useContext(HomeContext);

  return (
    <Fragment>
      <section className="">
        <div className=" about-shop">
          <h3 className="hearder-about-shop text-center">
            𝐖𝐄𝐋𝐂𝐎𝐌𝐄 𝐓𝐎 𝐎𝐔𝐑 𝐒𝐓𝐎𝐑𝐄
          </h3>
          <div className="sub-title-about-shop text-center mt-2 mb-2">
            The product are based on actual and verified supplies
            <br />
            bring an 𝑒𝑥𝑡𝑟𝑒𝑚𝑒𝑙𝑦 experience
          </div>
          <div className="content-about-shop  grid grid-cols-1 md:grid-cols-3">
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/ingredients.jpg"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content ">
                <h6 className="item-about-shoh6-header">𝑅𝑒𝑙𝑖𝑎𝑏𝑙𝑒 𝑆𝑜𝑢𝑟𝑐𝑖𝑛𝑔 𝑜𝑓 𝑆𝑒𝑐𝑜𝑛𝑑-ℎ𝑎𝑛𝑑 𝐶𝑙𝑜𝑡ℎ𝑖𝑛𝑔</h6>
                <p className="item-about-shop-header">
                Every piece is carefully inspected and selected to ensure the highest quality
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/quality.png"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content  ">
                <h6 className="item-about-shoh6-header">𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐐𝐮𝐚𝐥𝐢𝐭𝐲</h6>
                <p className="item-about-shop-header">
                Ensuring each product is in perfect condition with <br />
                affordable and reasonable pricing
                </p>
              </div>
            </div>
            <div className="content-about-shop-item flex">
              <div className="item-about-shop-image">
                <img
                  className="fix-our-shop-image"
                  src="./image/scents.jpg"
                  alt="Girl in a jacket"
                ></img>
              </div>
              <div className="item-about-shop-content ">
                <h6 className="item-about-shoh6-header">𝐃𝐢𝐯𝐞𝐫𝐬𝐞 𝐒𝐭𝐲𝐥𝐞𝐬</h6>
                <p className="item-about-shop-header">
                A blend of vintage and modern, offering various styles <br />
                from well-known brands
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

export default IntroduceAboutShop;
