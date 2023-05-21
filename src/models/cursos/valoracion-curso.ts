import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Curso } from './curso';
import { Valoracion } from './valoracion';

export const ValoracionCurso = sequelize.define(
  'valoracion_curso',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'valoracion_curso',
    timestamps: false,
  }
);

Curso.belongsToMany(Valoracion, {
  through: ValoracionCurso,
});

Valoracion.belongsToMany(Curso, {
  through: ValoracionCurso,
});
