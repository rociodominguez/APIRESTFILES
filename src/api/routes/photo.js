const upload = require("../../middleware/file");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { getPhotos, postPhoto, deletePhoto, updatePhoto } = require("../controllers/photo");

const photosRouter = require("express").Router();

photosRouter.put("/:id", [isAuth], [isAdmin], updatePhoto)
photosRouter.delete("/:id", [isAuth], [isAdmin], deletePhoto);
photosRouter.post("/", upload.single("img"), [isAuth], postPhoto);
photosRouter.get("/", getPhotos);

module.exports = photosRouter;