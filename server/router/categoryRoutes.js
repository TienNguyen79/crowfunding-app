// categoryRoutes.js
const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/auth"); // Đường dẫn đến middleware auth.js (nếu cần)
const fs = require("fs");
let rawdata = fs.readFileSync("db.json");
let database = JSON.parse(rawdata);
let categories = database.categories;

// Tuyến đường DELETE để xóa category dựa trên id
router.delete("/delete/:id", verifyToken, (req, res) => {
  const categoryId = parseInt(req.params.id);
  const index = categories.findIndex((cat) => cat.id === categoryId);

  if (index === -1) {
    return res.status(404).json({ error: "Category not found" });
  }

  // Xóa category khỏi danh sách
  const deletedCategory = categories.splice(index, 1)[0];
  res.json(deletedCategory);
});

module.exports = router;
