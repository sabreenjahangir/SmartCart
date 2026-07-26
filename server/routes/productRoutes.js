const express = require("express");
const router = express.Router();

const {
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} = require("../controllers/productController");
console.log({
  addProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
});

// Add Product
router.post("/", addProduct);

// Get All Products
router.get("/", getProducts);

// Get Single Product
router.get("/:id", getProductById);

// Update Product
router.put("/:id", updateProduct);

// Delete Product
router.delete("/:id", deleteProduct);

module.exports = router;