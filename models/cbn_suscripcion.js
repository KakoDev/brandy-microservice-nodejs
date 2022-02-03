const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_suscripcion', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    endpoint: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true
    },
    expirationTime: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_suscripcion',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_suscripcion_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
