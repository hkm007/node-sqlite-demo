import express from "express";
import {
  createTraining,
  deleteTraining,
  getAllTrainings,
  getTrainingById,
} from "../controllers/training.js";

const trainingRouter = express.Router();

trainingRouter.get("/", getAllTrainings);
trainingRouter.get("/:id", getTrainingById);
trainingRouter.post("/", createTraining);
trainingRouter.delete("/:id", deleteTraining);

export default trainingRouter;
