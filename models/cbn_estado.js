const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_estado', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(40),
      allowNull: true
    },
    flujo_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_flujo',
        key: 'id'
      }
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_estado',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_estado_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_estado_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
