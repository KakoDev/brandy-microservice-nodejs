const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_flujo', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    nombre: {
      type: DataTypes.STRING(30),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_flujo',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_flujo_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
