import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Instructor } from '../usuarios/instructor';

export const InfoPago = sequelize.define(
  'info_pago',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    tipo_tarjeta: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    fecha_vencimiento: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    codigo: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'info_pago',
    timestamps: false,
  }
);

Instructor.hasMany(InfoPago);
InfoPago.belongsTo(Instructor);
