const express = require("express");
const router = express.Router();

const products = [];

router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  res.redirect("/");
});

router.get("/add-product", (req, res, next) => {
  res.render("add-product", {
    docTitle: "Add Product",
    path: "/admin/add-product",
    addProductActive: true,
    productCSS: true,
    formCSS: true,
  });
});

exports.routes = router;
exports.products = products;
