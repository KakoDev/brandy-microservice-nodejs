const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_permisos', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    codigo: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    is_platform_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    order: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_permisos',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_permisos_id_codigo_uindex",
        unique: true,
        fields: [
          { name: "id" },
          { name: "codigo" },
        ]
      },
      {
        name: "cbn_permisos_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_permisos_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
