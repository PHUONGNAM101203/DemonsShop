const express = require("express");
const {
  getCheckoutUrl,
  sendEmailNotify,
} = require("../controller/payment.controller");
const router = express.Router();

router.post("/checkout", getCheckoutUrl);
router.post("/sendEmailNotify", sendEmailNotify);
module.exports = router;
