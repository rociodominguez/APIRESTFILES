const { deletePhotoCloud } = require("../../utils/deletePhotoCloud");
const Photographers = require("../models/photographers");

const getPhotographers = async (req, res, next) => {
    try {
        const photographers = await Photographers.find();
        return res.status(200).json(photographers);
    } catch (error) {
        return res.status(400).json("Error en GET");
    }
};

const postPhotographer = async (req, res, next) => {
    try {
        const newPhotographers = new Photographers(req.body);
        if (req.file) {
            newPhotographers.img = req.file.path
        }
        const photographerSaved = await newPhotographers.save()
        return res.status(200).json(photographerSaved);
    } catch (error) {
        return res.status(400).json("Error en POST");
    }
};

const deletePhotographer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPhotographer = await Photographers.findByIdAndDelete(id);
        deletePhotoCloud(deletedPhotographer.img);
        return res.status(200).json(deletedPhotographer)
    } catch (error) {
        return res.status(400).json("Error en DELETE")
    }
}

const updatePhotographer = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newPhotographer = req.body;
        delete newPhotographer._id;
        const updatedPhotographer = await Photo.findByIdAndUpdate(id, newPhotographer, { new: true });
        return res.status(200).json(updatedPhotographer);
    } catch (error) {
        return res.status(400).json("Error en PUT");
    }
};

module.exports = { getPhotographers, postPhotographer, deletePhotographer, updatePhotographer }