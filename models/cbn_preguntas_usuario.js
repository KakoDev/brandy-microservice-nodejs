const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_preguntas_usuario', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    cliente_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_cliente',
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
    texto_respuesta: {
      type: DataTypes.STRING(400),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_preguntas_usuario',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_preguntas_usuario_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_preguntas_usuario_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
