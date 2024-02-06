const cloudinary = require("cloudinary").v2;

const deletePhotoCloud = (imgUrl) => {
    const imgSplited = imgUrl.split("/");
    const folderName = imgSplited.at(-2);
    const fileName = imgSplited.at(-1).split(".");

    const public_id = `${folderName}/${fileName[0]}`;

    cloudinary.uploader.destroy(public_id, () => {
        console.log("Deleted!");
    })
}

module.exports = { deletePhotoCloud }