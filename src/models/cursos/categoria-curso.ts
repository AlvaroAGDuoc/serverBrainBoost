import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Curso } from './curso';
import { Categoria } from './categoria';

export const CategoriaCurso = sequelize.define(
  'categoria_curso',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    tableName: 'categoria_curso',
    timestamps: false,
  }
);

Curso.belongsToMany(Categoria, {
  through: CategoriaCurso,
});

Categoria.belongsToMany(Curso, {
  through: CategoriaCurso,
});
