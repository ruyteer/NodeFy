const express = require("express");
const router = express.Router();
const UploadController = require("../../controllers/UploadController");
const upload = require("../../services/config/multerConfig");
const uploadFile = require("../../services/config/firebase");

router.post(
  "/upload",
  upload.single("file"),
  uploadFile,
  UploadController.upload
);
router.get("/get", UploadController.getFiles);

module.exports = router;
