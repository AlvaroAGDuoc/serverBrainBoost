import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Usuario } from './usuario';

export const Instructor = sequelize.define(
  'instructor',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    biografia: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    calificacion: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    tableName: 'instructor',
    timestamps: false,
  }
);

Usuario.hasMany(Instructor);
Instructor.belongsTo(Usuario);
