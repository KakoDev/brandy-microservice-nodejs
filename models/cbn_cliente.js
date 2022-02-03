const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_cliente', {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'cbn_usuario',
        key: 'id'
      }
    },
    tiporegistro_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_tiporegistro',
        key: 'id'
      }
    },
    comuna_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'cbn_comuna',
        key: 'id'
      }
    },
    rut: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    razon_social: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    nombre: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    apellido: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    apellido2: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    celular1: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    celular2: {
      type: DataTypes.STRING(12),
      allowNull: true
    },
    giro: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    sexo: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_nacimiento: {
      type: DataTypes.DATE,
      allowNull: true
    },
    direccion: {
      type: DataTypes.STRING(300),
      allowNull: true
    },
    ingreso_declarado: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    is_empresa: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    }
  }, {
    sequelize,
    tableName: 'cbn_cliente',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_cliente_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_cliente_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_cliente_rut_uindex",
        unique: true,
        fields: [
          { name: "rut" },
        ]
      },
      {
        name: "cbn_cliente_user_id_uindex",
        unique: true,
        fields: [
          { name: "user_id" },
        ]
      },
    ]
  });
};
