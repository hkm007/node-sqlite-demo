import TrainingDao from "../dao/training.js";

const trainingDao = new TrainingDao();

export async function getAllTrainings(req, res) {
  const trainings = await trainingDao.getAllTrainings();
  res.status(200).json({ data: trainings });
}

export async function getTrainingById(req, res) {
  const training = await trainingDao.getTrainingById(req.params.id);
  res.status(200).json({ data: training });
}

export async function createTraining(req, res) {
  const { title, description } = req.body;
  const created = await trainingDao.createTraining(title, description);
  if (created) {
    res.status(201).json({ data: "record created!" });
  } else {
    res.status(500).json({ data: "record not created!" });
  }
}

export async function deleteTraining(req, res) {
  const deleted = await trainingDao.deleteTraining(req.params.id);
  if (deleted) {
    res.status(200).json({ data: "record deleted!" });
  } else {
    res.status(500).json({ data: "record not deleted!" });
  }
}
