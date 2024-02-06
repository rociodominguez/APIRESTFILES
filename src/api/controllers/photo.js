const { deletePhotoCloud } = require("../../utils/deletePhotoCloud");
const Photo = require("../models/photo");

const getPhotos = async (req, res, next) => {
    try {
        const photos = await Photo.find();
        return res.status(200).json(photos);
    } catch (error) {
        return res.status(400).json("Error en GET");
    }
};

const postPhoto = async (req, res, next) => {
    try {
        const newPhotos = new Photo(req.body);
        if (req.file) {
            newPhotos.img = req.file.path
        }
        const photoSaved = await newPhotos.save()
        return res.status(200).json(photoSaved);
    } catch (error) {
        return res.status(400).json("Error en POST");
    }
};

const deletePhoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deletedPhoto = await Photo.findByIdAndDelete(id);
        deletePhotoCloud(deletedPhoto.img);
        return res.status(200).json(deletedPhoto)
    } catch (error) {
        return res.status(400).json("Error en DELETE")
    }
}

const updatePhoto = async (req, res, next) => {
    try {
        const { id } = req.params;
        const newPhoto = req.body;
        delete newPhoto._id;
        const updatedPhoto = await Photo.findByIdAndUpdate(id, newPhoto, { new: true });
        return res.status(200).json(updatedPhoto);
    } catch (error) {
        return res.status(400).json("Error en PUT");
    }
};

module.exports = { getPhotos, postPhoto, deletePhoto, updatePhoto }