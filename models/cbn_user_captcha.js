const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_user_captcha', {
    id: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      primaryKey: true
    },
    used: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    ip: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    vd: {
      type: DataTypes.STRING(64),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_user_captcha',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_user_captcha_id_email_uindex",
        unique: true,
        fields: [
          { name: "id" },
          { name: "email" },
        ]
      },
      {
        name: "cbn_user_captcha_pk",
        unique: true,
        fields: [
          { name: "id" },
          { name: "email" },
        ]
      },
    ]
  });
};
