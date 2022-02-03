const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cbn_perfil_permisos', {
    perfil_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_perfil',
        key: 'id'
      },
      unique: "cbn_perfil_permisos_pk"
    },
    permiso_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'cbn_permisos',
        key: 'id'
      },
      unique: "cbn_perfil_permisos_pk"
    },
    valor: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: false
    }
  }, {
    sequelize,
    tableName: 'cbn_perfil_permisos',
    schema: 'public',
    timestamps: true,
    indexes: [
      {
        name: "cbn_perfil_permisos_perfil_id_permiso_id_index",
        fields: [
          { name: "perfil_id" },
          { name: "permiso_id" },
        ]
      },
      {
        name: "cbn_perfil_permisos_pk",
        unique: true,
        fields: [
          { name: "perfil_id" },
          { name: "permiso_id" },
        ]
      },
    ]
  });
};
