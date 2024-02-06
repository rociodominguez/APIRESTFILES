const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photoSchema = new Schema(
  {
    img: { type: String, required: true },
    photographer: { type: String, required: true },
    title: { type: String, required: false },
    year: { type: Number }
  },
  {
    timestamps: true,
    collection: "photos"
  }
);

const Photo = mongoose.model("photos", photoSchema, "photos");
module.exports = Photo;