import express from "express";
import trainingRouter from "./routes/training.js";

const app = express();

app.use(express.json());

app.use("/api/training", trainingRouter);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () =>
  console.log(`server running at http://localhost:${PORT}`)
);
