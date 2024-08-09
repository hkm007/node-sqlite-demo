import express from "express";
import {
  createTraining,
  deleteTraining,
  getAllTrainings,
  getTrainingById,
} from "../controllers/training.js";

const trainingRouter = express.Router();

trainingRouter.get("/training", getAllTrainings);
trainingRouter.get("/training/:id", getTrainingById);
trainingRouter.post("/training", createTraining);
trainingRouter.delete("/training/:id", deleteTraining);

export default trainingRouter;
