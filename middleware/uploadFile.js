const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images/${req.body.type}`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const baseName = file.originalname.split(".")[0];
    const fileName = `${baseName}-${new Date().getTime()}.${ext}`;
    cb(null, fileName);
  },
});

const multerFileFilter = (req, file, cb) => {
  const mimeType = file.mimetype.split("/")[1];
  const { type, price, name } = req.body;

  if (!type || !price || !name) {
    return cb("all fields are required", false);
  }

  if (mimeType !== "jpeg" && mimeType !== "jpg" && mimeType !== "webp") {
    return cb("file format not accepted", false);
  }

  return cb(null, true);
};

const upload = multer({
  storage: multerDiskStorage,
  fileFilter: multerFileFilter,
  limits: { files: 1 },
});

const uploadFile = async (req, res, next) => {
  upload.single("pizza_img")(req, res, function (err) {
    if (err) return next(err);
    else next();
  });
};

module.exports = uploadFile;
