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
          Sản phẩm dựa trên nguồn cung thực tế và đã được xác minh
            <br />
            mang lại trải nghiệm tuyệt vời
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
                Mỗi sản phẩm đều được kiểm tra và lựa chọn cẩn thận để đảm bảo chất lượng cao nhất
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
                Đảm bảo mỗi sản phẩm đều ở trong tình trạng hoàn hảo với <br />
                giá cả phải chăng và hợp lý
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
                Sự pha trộn giữa cổ điển và hiện đại, mang đến nhiều phong cách khác nhau <br />
                từ các thương hiệu nổi tiếng
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
