const multer = require("multer");
const sharp = require("sharp");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    const ext = file.originalname.split(".").pop();
    cb(null, `${ file.fieldname } - ${Date.now()}.${ext}`);
  },
});

const upload = multer({ storage });

const helperImg = (filePath, fileName, size = 300) => {
  return sharp(filePath).resize(size).toFile(`./optimize/${fileName}.png`);
};

module.exports = {
  storage,
  helperImg,
  upload
};
