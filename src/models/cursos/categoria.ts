import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';

export const Categoria = sequelize.define(
  'categoria',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'categoria',
    timestamps: false,
  }
);
