const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_usuario', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_perfil',
        key: 'id'
      }
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_login: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    imagen: {
      type: DataTypes.STRING(300),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_usuario',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_usuario_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_usuario_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
