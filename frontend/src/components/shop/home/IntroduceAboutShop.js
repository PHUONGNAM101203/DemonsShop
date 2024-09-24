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
            𝑇ℎ𝑒 𝑝𝑟𝑜𝑑𝑢𝑐𝑡 𝑖𝑠 𝑐𝑜𝑚𝑝𝑙𝑒𝑡𝑒𝑙𝑦 𝑚𝑎𝑑𝑒 𝑓𝑟𝑜𝑚 𝑛𝑎𝑡𝑢𝑟𝑎𝑙 𝑖𝑛𝑔𝑟𝑒𝑑𝑖𝑒𝑛𝑡𝑠 𝑡ℎ𝑎𝑡 𝑎𝑟𝑒
            𝑢𝑠𝑒𝑟-𝑓𝑟𝑖𝑒𝑛𝑑𝑙𝑦 𝑎𝑛𝑑 𝑏𝑟𝑖𝑛𝑔 𝑎𝑛 𝑒𝑥𝑡𝑟𝑒𝑚𝑒𝑙𝑦 𝑝𝑙𝑒𝑎𝑠𝑎𝑛𝑡 𝑓𝑟𝑎𝑔𝑟𝑎𝑛𝑐𝑒
            <br />
            𝑏𝑟𝑖𝑛𝑔 𝑎𝑛 𝑒𝑥𝑡𝑟𝑒𝑚𝑒𝑙𝑦 𝑝𝑙𝑒𝑎𝑠𝑎𝑛𝑡 𝑓𝑟𝑎𝑔𝑟𝑎𝑛𝑐𝑒
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
                <h6 className="item-about-shoh6-header">𝐍𝐚𝐭𝐮𝐫𝐚𝐥 𝐢𝐧𝐠𝐫𝐞𝐝𝐢𝐞𝐧𝐭𝐬</h6>
                <p className="item-about-shop-header">
                  𝐼𝑛𝑔𝑟𝑒𝑑𝑖𝑒𝑛𝑡𝑠 100% 𝑛𝑎𝑡𝑢𝑟𝑎𝑙
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
                <h6 className="item-about-shoh6-header">𝐄𝐱𝐜𝐞𝐩𝐭𝐢𝐨𝐧𝐚𝐥 𝐪𝐮𝐚𝐥𝐢𝐭𝐲</h6>
                <p className="item-about-shop-header">
                  𝑃𝑟𝑜𝑣𝑖𝑑𝑖𝑛𝑔 𝑜𝑢𝑡𝑠𝑡𝑎𝑛𝑑𝑖𝑛𝑔 𝑞𝑢𝑎𝑙𝑖𝑡𝑦 <br />
                  𝑐𝑜𝑚𝑝𝑎𝑟𝑒𝑑 𝑡𝑜 𝑝𝑟𝑜𝑑𝑢𝑐𝑡 𝑝𝑟𝑖𝑐𝑒
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
                <h6 className="item-about-shoh6-header">𝐃𝐢𝐯𝐞𝐫𝐬𝐞 𝐬𝐜𝐞𝐧𝐭𝐬</h6>
                <p className="item-about-shop-header">
                  𝑀𝑎𝑑𝑒 𝑓𝑟𝑜𝑚 𝑛𝑎𝑡𝑢𝑟𝑎𝑙 𝑖𝑛𝑔𝑟𝑒𝑑𝑖𝑒𝑛𝑡𝑠: <br />
                  𝑗𝑎𝑠𝑚𝑖𝑛𝑒, 𝑙𝑎𝑣𝑒𝑛𝑑𝑒𝑟...
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
