import { Model, DataTypes } from "sequelize";
import sequelize from "../config/db/index.js";

class Cliente extends Model {}

Cliente.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false, //allowNull ele nao aceita nulo
    },
    dataNascimento: DataTypes.DATE,
    telefone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE,
  },
  {
    modelName: "Cliente",
    tableName: "cliente",
    sequelize,
  }
);

export default Cliente
