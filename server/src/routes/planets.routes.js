import { Router } from "express";
import { getAllPlanets } from "../controllers/planets.controller.js";

const router = Router();

router.get('/get-all-planets', getAllPlanets);

export default router;