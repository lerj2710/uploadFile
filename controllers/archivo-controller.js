const res = require("express/lib/response");
const { helperImg } = require("../middlewares/archivo");

const uploadFiles = (req, res) => {
  console.log("--->", req.file);
  helperImg(req.file.path, `resize- ${req.file.filename} `, 100);
  res.send({ data: "Imagen lista" });
};


module.exports = {
  uploadFiles,

};
