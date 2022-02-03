const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('sessions', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_usuario',
        key: 'id'
      }
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false
    },
    session_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'sessions',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "access_token",
        unique: true,
        fields: [
          { name: "access_token" },
        ]
      },
      {
        name: "session_token",
        unique: true,
        fields: [
          { name: "session_token" },
        ]
      },
      {
        name: "sessions_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
