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
          Mô tả
        </div>
        <div
          onClick={(e) => dispatch({ type: "menu", payload: false })}
          className={`${
            !data.menu ? "border-b-2 border-yellow-700" : ""
          } px-4 py-3 relative flex cursor-pointer`}
        >
          <span>Đánh giá</span>
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
          Bạn cần đăng nhập để đánh giá
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
          <div class="product-description mt-6 mr-10 ml-10">
          <h5>🌸 Nâng tầm phong cách của bạn với sự thanh lịch vượt thời gian 🌸</h5>
          <p>
          Trải nghiệm sự kết hợp giữa sự thoải mái và tinh tế với bộ sưu tập quần áo độc quyền của chúng tôi. Mỗi món đồ được thiết kế để mang đến sự kết hợp hài hòa giữa tính thẩm mỹ hiện đại và sự sang trọng dễ dàng, mang lại nét quyến rũ tinh tế cho tủ quần áo của bạn. Được thiết kế cẩn thận từ những chất liệu cao cấp, trang phục của chúng tôi không chỉ làm nổi bật hình dáng của bạn mà còn mang đến cho bạn cảm giác thoải mái và tự tin.
          </p>
          <p>
          Cho dù bạn đang bước vào một ngày làm việc bận rộn hay đang tận hưởng một buổi tối yên tĩnh bên ngoài, các sản phẩm quần áo của chúng tôi sẽ phù hợp với mọi dịp của bạn, khiến bạn cảm thấy thoải mái và sành điệu. Khám phá bộ sưu tập phù hợp với cá tính độc đáo của bạn, truyền cảm giác duyên dáng vào diện mạo hàng ngày của bạn.
          </p>
          <h6>
          Biến tủ quần áo của bạn thành một không gian sang trọng tinh tế. Hãy khám phá bộ sưu tập của chúng tôi ngay hôm nay để đắm mình trong thế giới thời trang vượt thời gian với sự thoải mái và phong cách. 🌺
          </h6>
          <p>👉 Kích thước: Có nhiều kích cỡ khác nhau để hoàn toàn phù hợp với hình thức của bạn.</p>
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
