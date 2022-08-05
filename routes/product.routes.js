const express = require("express");

const router = express.Router();

router
  .route("/")
  .get(productController.getAllUsers)
  .post(productController.createUser);

router
  .route("/:id")
  .get(productController.getUserById)
  .patch(productController.updateUser)
  .delete(productController.updateUser);

module.exports = router;

console.log(router);
