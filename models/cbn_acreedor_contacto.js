const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_acreedor_contacto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    acreedor_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_acreedor',
        key: 'id'
      }
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    telefono: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_acreedor_contacto',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_acreedor_contacto_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_acreedor_contacto_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
