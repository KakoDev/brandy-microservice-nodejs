const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_notificacion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    has_seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    texto: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    cliente_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    acreedor_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    deuda_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    notification_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cbn_notificacion',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_notificacion_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_notificacion_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
