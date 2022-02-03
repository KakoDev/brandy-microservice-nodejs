const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_auditoria', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    event_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    object_affected: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_auditoria',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "cbn_auditoria_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
