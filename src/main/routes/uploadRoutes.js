const express = require("express");
const router = express.Router();
const UploadController = require("../../controllers/UploadController");
const upload = require("../../services/config/multerConfig");
const uploadFile = require("../../services/config/firebase");
const checkAuth = require("../../services/middleware/checkAuth");

router.post(
  "/upload",
  checkAuth,
  upload.single("file"),
  uploadFile,
  UploadController.upload
);
router.get("/get", checkAuth, UploadController.getFiles);

module.exports = router;
