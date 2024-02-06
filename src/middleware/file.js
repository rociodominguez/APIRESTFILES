const multer = require("multer");
const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

const cloudStorage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: "photos_db",
        allowedFormats: ["jpeg", "jpg", "png"]
    }
});

const upload = multer({ storage: cloudStorage });

module.exports = upload;