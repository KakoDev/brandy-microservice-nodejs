const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_deuda_declarada_comentario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    deuda_declarada_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_deuda_declarada',
        key: 'id'
      }
    },
    texto: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    tipo_registro: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    user_has_seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    admin_has_seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'cbn_deuda_declarada_comentario',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_deuda_declarada_comentario_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_deuda_declarada_comentario_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
