import { DataTypes } from 'sequelize';
import sequelize from '../../db/connection';
import { Usuario } from '../usuarios/usuario';

export const Compra = sequelize.define(
  'compra',
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    fecha_compra: {
      type: DataTypes.DATE,
      defaultValue: Date.now,
    },
    total: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: 'compra',
    timestamps: false,
  }
);

Usuario.hasMany(Compra);
Compra.belongsTo(Usuario);
