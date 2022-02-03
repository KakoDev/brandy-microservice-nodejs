const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_comuna', {
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
    provincia_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_provincia',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'cbn_comuna',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_comuna_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_comuna_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
