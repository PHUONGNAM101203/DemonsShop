import React, { Fragment } from "react";

export const CancelComponent = (props) => {
  return (
    <Fragment>
      <div className="page-checkout-container">
        <img
          className="img-payment-false "
          src="https://cdni.iconscout.com/illustration/premium/thumb/payment-failed-5795926-4841583.png"
          alt=""
        />
        <h4 className="content-page-checkout">Thanh toán của bạn không thành công</h4>
        <p className="subcontent-page-checkout">
        Thanh toán không thành công. Vui lòng nhấn Back to home để quay lại trang chủ.
        </p>
        <a href="http://localhost:3000/">
          <button
            onClick={() => props.history.push("/")}
            className="page-checkout-button"
          >
            {" "}
            Trở về trang chủ
          </button>
        </a>
      </div>
    </Fragment>
  );
};
