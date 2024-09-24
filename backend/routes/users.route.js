const express = require("express");
const router = express.Router();
const {
  getAllUser,
  getSingleUser,
  postAddUser,
  postEditUser,
  getDeleteUser,
  changePassword,
} = require("../controller/users.controller");

router.get("/all-user", getAllUser);
router.post("/signle-user", getSingleUser);

router.post("/add-user", postAddUser);
router.post("/edit-user", postEditUser);
router.post("/delete-user", getDeleteUser);

router.post("/change-password", changePassword);

module.exports = router;
