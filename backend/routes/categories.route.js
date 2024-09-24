const express = require("express");
const router = express.Router();
const {
  getDeleteCategory,
  postEditCategory,
  postAddCategory,
  getAllCategory,
} = require("../controller/categories.controller");
const multer = require("multer");
const { loginCheck } = require("../middleware/auth.middleware");

// Image Upload setting
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads/categories");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "_" + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/all-category", getAllCategory);
router.post(
  "/add-category",
  loginCheck,
  upload.single("cImage"),
  postAddCategory
);
router.post("/edit-category", loginCheck, postEditCategory);
router.post("/delete-category", loginCheck, getDeleteCategory);

module.exports = router;
