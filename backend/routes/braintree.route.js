const express = require("express");
const router = express.Router();
const {
  ganerateToken,
  paymentProcess,
} = require("../controller/braintree.controller");
router.post("/braintree/get-token", ganerateToken);
router.post("/braintree/payment", paymentProcess);

module.exports = router;
