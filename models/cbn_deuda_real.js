const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_deuda_real', {
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
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_usuario',
        key: 'id'
      }
    },
    monto_condonado: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    tasa_interes_mensual: {
      type: DataTypes.DECIMAL,
      allowNull: true,
      defaultValue: 0
    },
    numero_cuotas: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    monto_final: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    vigencia: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    monto_mensual: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    fecha_oferta: {
      type: DataTypes.DATE,
      allowNull: true
    },
    numero_oferta: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    was_approved: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    }
  }, {
    sequelize,
    tableName: 'cbn_deuda_real',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_deuda_real_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_deuda_real_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
