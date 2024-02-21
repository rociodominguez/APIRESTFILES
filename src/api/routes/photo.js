const upload = require("../../middleware/file");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { getPhotos, postPhoto, deletePhoto, updatePhoto } = require("../controllers/photo");

const photosRouter = require("express").Router();

photosRouter.put("/:id", [isAdmin], updatePhoto)
photosRouter.delete("/:id", [isAdmin], deletePhoto);
photosRouter.post("/", [isAuth], upload.single("img"), postPhoto);
photosRouter.get("/", getPhotos);

module.exports = photosRouter;