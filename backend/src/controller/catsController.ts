import { Request, Response } from "express";
import { addNewCat } from "../helpers/addCat";
import cats_sh from "../models/cats_sh";
import { ICats } from "../../types";

const getTop5Cats = async (req: Request, res: Response) => {
  try {
    const top5Cats = await cats_sh.find({}).sort({ likes: -1 }).limit(5);
    return res.json(top5Cats);
  } catch (err) {
    console.log(`something went wrong: ${err}`);
  }
};

const getCatsByName = async (req: Request<ICats>, res: Response) => {
  try {
    const { name } = req.body;
    const cats = await cats_sh.find({ name });
    return res.json(cats);
  } catch (err) {
    console.log(`something went wrong: ${err}`);
  }
};
const getCatById = async (req: Request<ICats>, res: Response) => {
  try {
    const { _id } = req.body;
    const cat = await cats_sh.findOne({ _id });
    return res.json(cat);
  } catch (err) {
    console.log(`something went wrong: ${err}`);
  }
};

const likeCat = async (req: Request, res: Response) => {
  try {
    const catData = await cats_sh.findOneAndUpdate(
      { _id: req.body._id },
      { $inc: { likes: 1 } },
      { new: true }
    );
    return res.json(catData);
  } catch (err) {
    console.log(`something went wrong: ${err}`);
  }
};

// Helper func to add static cat data
const addCat = async (req: any, res: Response) => {
  try {
    await addNewCat(req.body);
    return res.json(req.body);
  } catch (err) {
    console.log(`something went wrong: ${err}`);
  }
};

export { getTop5Cats, getCatsByName, getCatById, likeCat, addCat };
