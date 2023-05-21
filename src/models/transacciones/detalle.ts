import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Curso } from '../cursos/curso';
import { Compra } from './compra';

export const Detalle = sequelize.define(
  'detalle',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    subtotal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: 'detalle',
    timestamps: false,
  }
);

Curso.belongsToMany(Compra, {
  through: Detalle,
});

Compra.belongsToMany(Curso, {
  through: Detalle,
});
