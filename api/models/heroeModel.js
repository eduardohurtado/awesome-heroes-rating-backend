import { Schema, model } from "mongoose";

const heroeModel = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  votesPositive: { type: Number, required: true },
  votesNegative: { type: Number, required: true },
  heroPhotoURL: { type: String, required: true },
  heroBannerURL: { type: String, required: true },
  moreInfoURL: { type: String, required: true }
});

export default model("Heroe", heroeModel);
