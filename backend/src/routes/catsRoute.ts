import { Router } from "express";
import {
  addCat,
  getTop5Cats,
  getCatsByName,
  likeCat,
  getCatById,
} from "../controller/catsController";

const router = Router();

router.get("/getTop5Cats", getTop5Cats);
router.post("/getCatsByName", getCatsByName);
router.post("/getCatById", getCatById);
router.post("/likeCat", likeCat);
router.post("/addCat", addCat); // Helper for data testing

export default router;
