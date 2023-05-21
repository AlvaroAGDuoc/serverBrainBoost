import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Usuario } from './usuario';

export const Estudiante = sequelize.define(
  'estudiante',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'estudiante',
    timestamps: false,
  }
);

Usuario.hasMany(Estudiante);
Estudiante.belongsTo(Usuario);
