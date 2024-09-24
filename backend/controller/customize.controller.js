const fs = require("fs");
const categoryModel = require("../models/categories.model");
const productModel = require("../models/products.model");
const orderModel = require("../models/orders.model");
const userModel = require("../models/users.model");
const customizeModel = require("../models/customize.model");
const nodemailer = require("nodemailer");
exports.getImages = async (req, res) => {
  try {
    let Images = await customizeModel.find({});
    if (Images) {
      return res.json({ Images });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.uploadSlideImage = async (req, res) => {
  let image = req.file.filename;
  if (!image) {
    return res.json({ error: "All field required" });
  }
  try {
    let newCustomzie = new customizeModel({
      slideImage: image,
    });
    let save = await newCustomzie.save();
    if (save) {
      return res.json({ success: "Image upload successfully" });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.deleteSlideImage = async (req, res) => {
  let { id } = req.body;
  if (!id) {
    return res.json({ error: "All field required" });
  } else {
    try {
      let deletedSlideImage = await customizeModel.findById(id);
      const filePath = `../server/public/uploads/customize/${deletedSlideImage.slideImage}`;

      let deleteImage = await customizeModel.findByIdAndDelete(id);
      if (deleteImage) {
        // Delete Image from uploads -> customizes folder
        fs.unlink(filePath, (err) => {
          if (err) {
            console.log(err);
          }
          return res.json({ success: "Image deleted successfully" });
        });
      }
    } catch (err) {
      console.log(err);
    }
  }
};

exports.getAllData = async (req, res) => {
  try {
    let Categories = await categoryModel.find({}).count();
    let Products = await productModel.find({}).count();
    let Orders = await orderModel.find({}).count();
    let Users = await userModel.find({}).count();
    if (Categories && Products && Orders) {
      return res.json({ Categories, Products, Orders, Users });
    }
  } catch (err) {
    console.log(err);
  }
};

exports.notifyEvent = async (req, res) => {
  let data = req.body;
  try {
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "aromaticbag.business@gmail.com",
        pass: "aealugohwduwzwad",
      },
    });

    const info = await transporter.sendMail({
      from: '"Aromatic Bag" <aromaticbag.business@gmail.com>', // sender address
      to: data.email, // list of receivers
      subject: "Special Event Notification", // Subject line
      text: "You have a new notification from Aromatic Bag.", // plain text body
      html: `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border-radius: 10px; background-color: #f7f9fc;">
      <div style="text-align: center; padding: 20px; background: linear-gradient(90deg, #64B5F6 0%, #81D4FA 100%); color: #ffffff; border-radius: 10px 10px 0 0;">
        <h2 style="margin: 0; font-size: 28px;">🎉 Special Event Notification 🎉</h2>
      </div>
          <div style="padding: 20px;">
            <p style="font-size: 18px; color: #333;">Hello,</p>
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
              We are excited to inform you about a special event happening at Aromatic Bag. Don't miss out on our exclusive offers and discounts!
            </p>
            <div style="background-color: #e3f2fd; padding: 20px; border-radius: 10px; margin: 20px 0; border-left: 5px solid #1e88e5;">
              <p style="font-size: 18px; color: #1e88e5; font-weight: bold;">Event Details:</p>
              <ul style="font-size: 16px; color: #333; list-style-type: none; padding: 0; margin: 0;">
                <li style="margin-bottom: 10px;">
                  <strong>🔥 Discount:</strong> <span style="color: #e91e63;">Up to 50% off</span> on selected items.
                </li>
                <li style="margin-bottom: 10px;">
                  <strong>🚚 Free Shipping:</strong> On orders over $50.
                </li>
                <li style="margin-bottom: 10px;">
                  <strong>🎁 Special Gifts:</strong> Free gifts with purchases over $100.
                </li>
              </ul>
            </div>
            <p style="font-size: 16px; color: #333; margin-bottom: 20px;">
              Make sure to visit our store or website to take advantage of these amazing offers. If you have any questions, feel free to contact our support team.
            </p>
            <p style="font-size: 16px; color: #333;">Thank you for being a valued customer!</p>
            <p style="font-size: 16px; color: #333;">Best regards,<br><span style="color: #4CAF50;">Aromatic Bag Team</span></p>
            <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0; margin-top: 20px; background-color: #fafafa; padding: 10px; border-radius: 0 0 10px 10px;">
              <p style="font-size: 14px; color: #999; margin: 0;">Aromatic Bag, FPT Urban Area, Ngu Hanh Son, Da Nang</p>
              <p style="font-size: 14px; color: #999; margin: 0;">Email: aromaticbag.business@gmail.com | Phone: 0336951009</p>
            </div>
          </div>
        </div>
      `, // html body
    });

    return res.json({ info: info });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};
