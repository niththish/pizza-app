const multer = require("multer");

const multerDiskStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `public/images`);
  },
  filename: (req, file, cb) => {
    const ext = file.mimetype.split("/")[1];
    const fileName = `${file.fieldname}-${new Date().getTime()}.${ext}`;
    cb(null, fileName);
  },
});

const multerFileFilter = (req, file, cb) => {
  const mimeType = file.mimetype.split("/")[1];
  if (mimeType === "jpeg" || mimeType === "jpg" || mimeType === "webp") {
    return cb(null, true);
  } else {
    return cb("file format not accepted", false);
  }
};

const upload = multer({
  storage: multerDiskStorage,
  fileFilter: multerFileFilter,
  limits: { files: 1 },
});

const uploadFile = async (req, res, next) => {
  upload.single("pizza_img")(req, res, function (err) {
    if (err) return next(err);
    else {
      console.log(req.file);
      next();
    }
  });
};

module.exports = uploadFile;
