const express = require("express");
const router = express.Router();
const controller = require("../controllers/usercontroller");

router.post("/signup", controller.Createuser);
router.post("/login", controller.Loginuser);
router.post("/post/data", controller.authenticateToken, controller.postdata);
router.get("/get/data", controller.authenticateToken, controller.getdata);
router.get(
  "/get/singledata/:id",
  controller.authenticateToken,
  controller.getsingledata
);
router.put(
  "/update/data/:id",
  controller.authenticateToken,
  controller.updatedata
);
router.post(
  "/delete/data/:id",
  controller.authenticateToken,
  controller.deleteData
);

module.exports = router;
