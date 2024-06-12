import { ICats } from "../../types";
import cats_sh from "../models/cats_sh";

export const addNewCat = async (payload: ICats) => {
  const cat = new cats_sh(payload);
  await cat.save();
};
