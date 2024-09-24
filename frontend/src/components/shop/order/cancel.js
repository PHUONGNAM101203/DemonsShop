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
        <h4 className="content-page-checkout">Your Payment is Unuccessful</h4>
        <p className="subcontent-page-checkout">
          Payment failed. Please click Back to home to return to the home page.
        </p>
        <a href="http://localhost:3000/">
          <button
            onClick={() => props.history.push("/")}
            className="page-checkout-button"
          >
            {" "}
            Back to home
          </button>
        </a>
      </div>
    </Fragment>
  );
};
