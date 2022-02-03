const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_acuerdo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deuda_real_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_deuda_real',
        key: 'id'
      }
    },
    fecha_acuerdo: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_acuerdo',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_acuerdo_deuda_real_id_uindex",
        unique: true,
        fields: [
          { name: "deuda_real_id" },
        ]
      },
      {
        name: "cbn_acuerdo_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
