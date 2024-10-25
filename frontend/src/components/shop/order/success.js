import React, { Fragment, useContext, useEffect } from "react";
import { fetchData } from "./Action";
import { cartListProduct } from "../partials/FetchApi";
import { LayoutContext } from "../index";
import { createOrder, sendEmailNotify } from "./FetchApi";
import "./style.css";
export const totalCost = () => {
  let totalCost = 0;
  let carts = JSON.parse(localStorage.getItem("cart"));
  carts.forEach((item) => {
    totalCost += item.quantitiy * item.price;
  });
  return totalCost;
};
export const PayoutSuccessComponent = (props) => {
  const { data, dispatch } = useContext(LayoutContext);

  useEffect(() => {
    fetchData(cartListProduct, dispatch).then((cartListProduct) => {
      thisCreateOrder(data);
    });
  }, []);

  async function thisCreateOrder(cartListProduct) {
    const urlParams = new URLSearchParams(window.location.search);
    const orderCode = urlParams.get("orderCode");
    const address = urlParams.get("address");
    const phone = urlParams.get("phone");
    const amount = urlParams.get("amount");

    console.log("cartListProduct", cartListProduct);
    let orderData = {
      allProduct: JSON.parse(localStorage.getItem("cart")),
      user: JSON.parse(localStorage.getItem("jwt")).user._id,
      amount: amount,
      address: address,
      phone: phone,
      transactionId: orderCode,
      totalCost: totalCost(),
    };
    try {
      let resposeData = await createOrder(orderData);
      if (resposeData.success) {
        await sendEmailNotify(orderData);
        localStorage.setItem("cart", JSON.stringify([]));
        dispatch({ type: "cartProduct", payload: null });
        dispatch({ type: "cartTotalCost", payload: null });
        dispatch({ type: "orderSuccess", payload: true });
        dispatch({ type: "loading", payload: false });
      } else if (resposeData.error) {
        console.log("has error", resposeData.error);
      }
    } catch (error) {
      console.log("error", error);
    }
    console.log("order", orderData);
  }
  return (
    <Fragment>
      {/* <div className="text-2xl text-center">Payment Success</div>
      <div
        onClick={() => props.history.push("/")}
        className="w-full px-4 py-2 text-center text-white font-semibold cursor-pointer"
        style={{ background: "#303031" }}
      >
        Continue Shopping
      </div> */}

      <div className="page-checkout-container">
        <img
          className="img-page-checkout"
          src="https://static.vecteezy.com/system/resources/previews/039/322/579/non_2x/young-women-use-smartphones-to-do-online-shopping-the-woman-makes-online-transactions-for-her-order-order-confirmation-concept-flat-illustration-vector.jpg"
          alt=""
        />
        <h4 className="content-page-checkout">Thanh toán của bạn thành công</h4>
        <p className="subcontent-page-checkout">
        Cảm ơn bạn đã thanh toán. Biên nhận thanh toán tự động sẽ được gửi đến
        email đã đăng ký của bạn
        </p>
        <button
          onClick={() => props.history.push("/")}
          className="page-checkout-button"
        >
          {" "}
          Trở về trang chủ
        </button>
      </div>
    </Fragment>
  );
};
