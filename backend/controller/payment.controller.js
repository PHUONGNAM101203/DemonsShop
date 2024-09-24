const PayOS = require("@payos/node");
const userModel = require("../models/users.model");

const payos = new PayOS(
  process.env.PayOS1,
  process.env.PayOS2,
  process.env.PayOS3
);
const nodemailer = require("nodemailer");

const getCheckoutUrl = async (req, res) => {
  try {
    const data = req.body;
    const { amountTotal } = data;
    const orderCode = new Date().getTime();
    const order = {
      amount: amountTotal,
      description: `Checkout order`,
      orderCode: orderCode,
      returnUrl: `${process.env.WEBAPP_URL
        }/payment/success?&address=${encodeURIComponent(
          data.address
        )}&phone=${encodeURIComponent(data.phone)}&amount=${encodeURIComponent(
          data.amountTotal
        )}`,
      cancelUrl: `${process.env.WEBAPP_URL
        }/payment/success?&address=${encodeURIComponent(
          data.address
        )}&phone=${encodeURIComponent(data.phone)}&amount=${encodeURIComponent(
          data.amountTotal
        )}`,
      // cancelUrl: `${process.env.WEBAPP_URL}/payment/cancel`,
    };
    const paymentLink = await payos.createPaymentLink(order);
    res.json({ url: paymentLink.checkoutUrl });
  } catch (error) {
    res.json({ error: error.message });
  }
};
const sendEmailNotify = async (req, res) => {
  let data = req.body;
  let userId = data.user;
  let user = await this.getUserById(userId);

  console.log("userId", user);
  user = user.user;
  let allProduct = data.allProduct;
  try {
    let email = user.email;
    console.log("data", data);
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: "aromaticbag.business@gmail.com",
        pass: "aealugohwduwzwad",
      },
    });

    // Generate the HTML for the product rows
    let productRows = "";
    let totalAmount = 0;
    allProduct.forEach((product) => {
      productRows += `
        <tr>
          <td style="padding: 12px; border-bottom: 1px solid #ddd;">${product.id}</td>
          <td style="text-align: right; padding: 12px; border-bottom: 1px solid #ddd;">${product.quantitiy} x ${product.price} Đ</td>
        </tr>
      `;
      totalAmount += product.quantitiy * product.price;
    });

    const info = await transporter.sendMail({
      from: '"Your order has been successfully placed" <aromaticbag.business@gmail.com>', // sender address
      to: email, // list of receivers
      subject: "Order Confirmation", // Subject line
      text: "Your order has been placed successfully.", // plain text body
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background-color: #f9f9f9;">
          <h2 style="color: #4CAF50; text-align: center;">Order Confirmation</h2>
          <p style="font-size: 16px; color: #333;">Dear ${user.name},</p>
          <p style="font-size: 16px; color: #333;">Thank you for your order! We are pleased to inform you that your order has been successfully placed.</p>
          <p style="font-size: 16px; color: #333;">
            We will notify you once your order is shipped. You can find the details of your order below:
          </p>
          <p style="font-size: 16px; color: #333;">
            <strong>Address:</strong> ${data.address}
          </p>
          <p style="font-size: 16px; color: #333;">
            <strong>Phone:</strong> ${data.phone}
          </p>
          <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
            <thead>
              <tr>
                <th style="text-align: left; padding: 12px; border-bottom: 2px solid #ddd; background-color: #f2f2f2;">Product ID</th>
                <th style="text-align: right; padding: 12px; border-bottom: 2px solid #ddd; background-color: #f2f2f2;">Quantity x Price</th>
              </tr>
            </thead>
            <tbody>
              ${productRows}
            </tbody>
          </table>
          <p style="font-size: 16px; color: #333;">
            <strong>Total Amount:</strong> ${totalAmount.toFixed(2)} Đ
          </p>
          <p style="font-size: 16px; color: #333;">If you have any questions, feel free to contact our support team.</p>
          <p style="font-size: 16px; color: #333;">Thank you for shopping with us!</p>
          <p style="font-size: 16px; color: #333;">Best regards,<br>Aromatic Bag Team</p>
          <div style="text-align: center; padding-top: 20px; border-top: 1px solid #e0e0e0; margin-top: 20px;">
            <p style="font-size: 14px; color: #999;">Aromatic Bag, FPT Urban Area, Ngu Hanh Son, Da Nang</p>
            <p style="font-size: 14px; color: #999;">Email: aromaticbag.business@gmail.com | Phone: 0336951009</p>
          </div>
        </div>
      `, // html body
    });

    console.log("info", info);
    return res.json({ info: info });
  } catch (error) {
    console.log(error);
    res.json({ error: error.message });
  }
};

exports.getUserById = async (userId) => {
  if (!userId) {
    return { error: "User ID must be provided" };
  }
  try {
    let user = await userModel
      .findById(userId)
      .select("name email phoneNumber userImage updatedAt createdAt");
    if (user) {
      return { user: user };
    } else {
      return { error: "User not found" };
    }
  } catch (err) {
    console.log(err);
    return { error: "An error occurred while retrieving the user" };
  }
};

module.exports = {
  getCheckoutUrl,
  sendEmailNotify,
};
