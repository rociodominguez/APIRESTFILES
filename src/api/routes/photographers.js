const upload = require("../../middleware/file");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { updatePhotographer, deletePhotographer, getPhotographers, postPhotographer } = require("../controllers/photographers");

const photographersRoutes = require("express").Router();

photographersRoutes.put("/:id", [isAuth], [isAdmin], updatePhotographer)
photographersRoutes.delete("/:id", [isAuth], [isAdmin], deletePhotographer);
photographersRoutes.post("/", upload.single("img"), [isAuth], postPhotographer);
photographersRoutes.get("/", getPhotographers);

module.exports = photographersRoutes;