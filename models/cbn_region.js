const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_region', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: false
    },
    abreviatura: {
      type: DataTypes.STRING(4),
      allowNull: true
    },
    capital: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_region',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_region_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_region_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
