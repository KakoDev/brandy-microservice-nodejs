const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_perfil', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    is_admin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    is_base: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'cbn_perfil',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_perfil_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_perfil_nombre_uindex",
        unique: true,
        fields: [
          { name: "nombre" },
        ]
      },
      {
        name: "cbn_perfil_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
