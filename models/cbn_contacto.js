const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_contacto', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    reference: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_cliente',
        key: 'id'
      }
    },
    is_cliente: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_contacto',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_contacto_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_contacto_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
