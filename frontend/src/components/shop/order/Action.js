import { createOrder, getCheckoutUrl } from "./FetchApi";

export const fetchData = async (cartListProduct, dispatch) => {
  dispatch({ type: "loading", payload: true });
  try {
    let responseData = await cartListProduct();
    if (responseData && responseData.Products) {
      setTimeout(function () {
        dispatch({ type: "cartProduct", payload: responseData.Products });
        dispatch({ type: "loading", payload: false });
      }, 1000);
    }
  } catch (error) {
    console.log(error);
  }
};

export const fetchbrainTree = async (getBrainTreeToken, setState) => {
  try {
    let responseData = await getBrainTreeToken();
    if (responseData && responseData) {
      setState({
        clientToken: responseData.clientToken,
        success: responseData.success,
      });
      console.log(responseData);
    }
  } catch (error) {
    console.log(error);
  }
};

export const pay = async (
  data,
  dispatch,
  state,
  setState,
  totalCost,
  history
) => {
  console.log(state);
  if (!state.address) {
    setState({ ...state, error: "Please provide your address" });
  } else if (!state.phone) {
    setState({ ...state, error: "Please provide your phone number" });
  } else {
    dispatch({ type: "loading", payload: true });
    try {
      const payoutData = await getCheckoutUrl({
        ...data,
        ...state,
        amountTotal: totalCost(),
      });
      const { error, url } = payoutData;
      if (!error) {
        console.log("payoutData", payoutData);
        window.location.href = url;
      } else {
        setState({ ...state, error });
      }
    } catch (error) {
      console.log(error);
      setState({ ...state, error: error.message });
    }
  }
};
