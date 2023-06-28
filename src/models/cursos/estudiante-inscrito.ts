import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Curso } from './curso';
import { Estudiante } from '../usuarios/estudiante';
import { Usuario } from '../usuarios/usuario';

export const EstudianteInscrito = sequelize.define(
  'estudiante_inscrito',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    certificado: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    tableName: 'estudiante_inscrito',
    timestamps: false,
  }
);

Curso.belongsToMany(Usuario, {
  through: EstudianteInscrito,
});

Usuario.belongsToMany(Curso, {
  through: EstudianteInscrito,
});
