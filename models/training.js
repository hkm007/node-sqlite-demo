import { DataTypes } from "sequelize";
import sequelize from "../lib/database.js";

const Training = sequelize.define(
  "Training",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
  },
  {
    tableName: "trainings",
    timestamps: true,
  }
);

sequelize
  .sync()
  .then(() => {
    console.log("Trainings table has been created.");
  })
  .catch((error) => console.log("Error creating Trainings table:", error));

export default Training;
