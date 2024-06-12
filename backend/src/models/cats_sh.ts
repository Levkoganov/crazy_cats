import { Schema, model } from "mongoose";
import { ICats } from "../../types";
import { reqString, reqNumber, defaultNumber } from "../constants";

const catSchema = new Schema<ICats>(
  {
    name: reqString,
    age: reqNumber,
    location: reqString,
    favoriteFood: reqString,
    color: reqString,
    height: reqNumber,
    weight: reqNumber,
    likes: defaultNumber,
  },
  { timestamps: true }
);

export default model<ICats>("Cat", catSchema);
