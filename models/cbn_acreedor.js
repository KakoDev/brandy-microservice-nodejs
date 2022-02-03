const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_acreedor', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    comuna_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_comuna',
        key: 'id'
      }
    },
    rut: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    contacto: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    telefono: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    razon_social: {
      type: DataTypes.STRING(100),
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
    },
    texto_notification: {
      type: DataTypes.STRING(500),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_acreedor',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_acreedor_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_acreedor_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
