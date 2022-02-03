const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_password_change', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'cbn_cliente',
        key: 'id'
      }
    },
    token: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_password_change',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_password_change_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_password_change_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
