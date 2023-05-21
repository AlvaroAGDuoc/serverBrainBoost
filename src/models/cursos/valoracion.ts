import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Usuario } from '../usuarios/usuario';

export const Valoracion = sequelize.define(
  'valoracion',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    comentario: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: 'valoracion',
    timestamps: false,
  }
);

Usuario.hasMany(Valoracion);
Valoracion.belongsTo(Usuario);
