const express = require("express");
const app = express();
const render = require("render");
app.use(express.static("public"));
app.use(express.json());
const userController = require("./controller/user.controller");
const Product = require("./model/products.model");
const Cart = require("./model/cart.model");
const Address = require("./model/address.model");
app.use("/user", userController);
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs"); // root directory for views views/

app.use("/products", (req, res) => {
  return res.render("products");
});
app.use("/products/:id", (req, res) => {
  return res.render("products");
});

app.post("/checkCart", async (req, res) => {
  var item = await Cart.find({
    $and: [{ userID: req.body.userID }, { productID: req.body.productID }],
  })
    .lean()
    .exec();

  if (item.length == 0) {
    var insert = Cart.create(req.body);
    return res.json({ status: "success", data: insert });
  } else {
    return res.json({ status: "failed" });
  }
});

app.get("/productDetail/:id", async (req, res) => {
  try {
    // const data=await Product.findById(req.params.id).lean().exec();
    // console.log(data)
    return res.render("productDetails");
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.post("/findProductDetails", async (req, res) => {
  try {
    const data = await Product.findById(req.body.id).lean().exec();
    // console.log(data);
    return res.json({ item: data });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.get("/data", async (req, res) => {
  try {
    const data = await Product.find({}).lean().exec();
    // console.log(data)
    return res.json({ res: data });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.post("/cartdata", async (req, res) => {
  try {
    const data = await Cart.find({ userID: req.body.userID }).lean().exec();
    // console.log(data);
    return res.json({ res: data });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});


app.get("/removeItemFromCart/:id", async (req, res) => {
  try {
    const item = await Cart.findByIdAndDelete(req.params.id).lean().exec();
    return res.status(200).send({ status: "success" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).send({ status: err.message });
  }
});

app.get("/loginpage", (req, res) => {
  return res.render("login");
});

app.get("/cartpage", (req, res) => {
  return res.render("cart");
});

app.patch("/cartpage/:id", async (req, res) => {
  try {
    const data = await Cart.findByIdAndUpdate(req.params.id,req.body,{new:true})
    // console.log(data);
    return res.json({ res: data });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});


app.get("/userprofile", (req, res) => {
  return res.render("userProfile");
});

app.get("/address", (req, res) => {
  return res.render("address");
});

app.post("/postAddress", async (req, res) => {
  try {
    const data = await Address.create(req.body);
    return res.json({ status: "success" });
  } catch (err) {
    return res.status(400).json(err.message);
  }
});

app.get("/shipping", (req, res) => {
  return res.render("shipping");
});

app.get("/findAddress/:id", async (req, res) => {
  const item = await Address.find({ userID: req.params.id }).lean().exec();
  // console.log(item);
  return res.json({ res: item });
});

app.get("/payment", (req, res) => {
  return res.render("payment");
});

app.get("/paymentDetails", (req, res) => {
  return res.render("paymentDetails");
});

app.get("/thankspage", (req, res) => {
  return res.render("thanks");
});

app.get("/signuppage", (req, res) => {
  return res.render("signUp");
});

app.get("/index", async (req, res) => {
  return res.render("index");
});
const { register, login } = require("./controller/auth.controller");
app.post("/register", register);
app.post("/login", login);


app.get("*", function (req, res) {
  res.render("Error_page");   
});

module.exports = app;
