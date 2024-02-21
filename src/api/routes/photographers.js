const upload = require("../../middleware/file");
const { isAuth, isAdmin } = require("../../middleware/auth");
const { updatePhotographer, deletePhotographer, getPhotographers, postPhotographer } = require("../controllers/photographers");

const photographersRoutes = require("express").Router();

photographersRoutes.put("/:id", [isAdmin], updatePhotographer)
photographersRoutes.delete("/:id", [isAdmin], deletePhotographer);
photographersRoutes.post("/", [isAuth], upload.single("img"), postPhotographer);
photographersRoutes.get("/", getPhotographers);

module.exports = photographersRoutes;