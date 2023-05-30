import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Curso } from './curso';

export const Video = sequelize.define(
  'video',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    titulo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    video: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'video',
    timestamps: false,
  }
);

Curso.hasMany(Video);
Video.belongsTo(Curso);
