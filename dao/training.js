import Training from "../models/training.js";

export default class TrainingDao {
  async getTrainingById(trainingId) {
    try {
      const result = await Training.findByPk(trainingId);
      if (result) {
        return result;
      } else {
        return {};
      }
    } catch (error) {
      console.error(error.message);
      return {};
    }
  }

  async getAllTrainings() {
    try {
      return await Training.findAll();
    } catch (error) {
      console.error(error.message);
      return [];
    }
  }

  async createTraining(title, description) {
    try {
      await Training.create({ title, description });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }

  async deleteTraining(trainingId) {
    try {
      await Training.destroy({
        where: {
          id: trainingId,
        },
      });
      return true;
    } catch (error) {
      console.log(error);
      return false;
    }
  }
}
