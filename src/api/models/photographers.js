const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const photographerSchema = new Schema(
  {
    img: { type: String, required: false },
    name: { type: String, required: true },
    citizenship: { type: String, required: true },
    style: { type: String, required: true },
  },
  {
    timestamps: true,
    collection: "photographers"
  }
);

const Photographers = mongoose.model("photographers", photographerSchema, "photographers");
module.exports = Photographers;