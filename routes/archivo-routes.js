const { Router } = require("express");
const { uploadFiles } = require("../controllers/archivo-controller");
const { upload } = require("../middlewares/archivo");

const router = Router();

router.post("/", upload.single("file"), uploadFiles);

module.exports = router;
