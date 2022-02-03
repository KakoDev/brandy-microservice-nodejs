const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_deuda_declarada', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    acreedor_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'cbn_acreedor',
        key: 'id'
      }
    },
    cliente_id: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'cbn_cliente',
        key: 'id'
      }
    },
    periodo_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_periodo',
        key: 'id'
      }
    },
    estado_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_estado',
        key: 'id'
      }
    },
    monto_deuda: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    monto_propuesta_cuota: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    send_evaluation_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_active: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true
    },
    user_id: {
      type: DataTypes.UUID,
      allowNull: true,
      references: {
        model: 'cbn_usuario',
        key: 'id'
      }
    },
    real_fecha_deuda: {
      type: DataTypes.DATE,
      allowNull: true
    },
    real_monto_deuda: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    real_mora: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    real_garantia: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    deuda_real_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    etapa: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'cbn_deuda_declarada',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_deuda_declarada_deuda_real_id_uindex",
        unique: true,
        fields: [
          { name: "deuda_real_id" },
        ]
      },
      {
        name: "cbn_deuda_declarada_id_uindex",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
      {
        name: "cbn_deuda_declarada_pk",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
};
