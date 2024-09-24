const express = require("express");
const router = express.Router();
const {
  postDeleteOrder,
  postUpdateOrder,
  postCreateOrder,
  getOrderByUser,
  getAllOrders,
} = require("../controller/orders.controller");

router.get("/get-all-orders", getAllOrders);
router.post("/order-by-user", getOrderByUser);

router.post("/create-order", postCreateOrder);
router.post("/update-order", postUpdateOrder);
router.post("/delete-order", postDeleteOrder);

module.exports = router;
