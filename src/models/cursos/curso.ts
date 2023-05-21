import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Instructor } from '../usuarios/instructor';

export const Curso = sequelize.define(
  'curso',
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
    fecha_creacion: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    descripcion: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    descuento: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    estado: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
  },
  {
    tableName: 'curso',
    timestamps: false,
  }
);

Instructor.hasMany(Curso);
Curso.belongsTo(Instructor);
