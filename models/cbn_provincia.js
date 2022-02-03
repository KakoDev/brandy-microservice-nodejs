const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_provincia', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(64),
      allowNull: true
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_region',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cbn_provincia',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_provincia_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_provincia_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
