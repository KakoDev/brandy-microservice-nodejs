var DataTypes = require("sequelize").DataTypes;
var _cbn_acreedor = require("./cbn_acreedor");
var _cbn_acreedor_contacto = require("./cbn_acreedor_contacto");
var _cbn_acuerdo = require("./cbn_acuerdo");
var _cbn_auditoria = require("./cbn_auditoria");
var _cbn_cliente = require("./cbn_cliente");
var _cbn_comuna = require("./cbn_comuna");
var _cbn_contacto = require("./cbn_contacto");
var _cbn_deuda_declarada = require("./cbn_deuda_declarada");
var _cbn_deuda_declarada_comentario = require("./cbn_deuda_declarada_comentario");
var _cbn_deuda_real = require("./cbn_deuda_real");
var _cbn_estado = require("./cbn_estado");
var _cbn_flujo = require("./cbn_flujo");
var _cbn_notificacion = require("./cbn_notificacion");
var _cbn_password_change = require("./cbn_password_change");
var _cbn_perfil = require("./cbn_perfil");
var _cbn_perfil_permisos = require("./cbn_perfil_permisos");
var _cbn_periodo = require("./cbn_periodo");
var _cbn_permisos = require("./cbn_permisos");
var _cbn_preguntas_usuario = require("./cbn_preguntas_usuario");
var _cbn_provincia = require("./cbn_provincia");
var _cbn_region = require("./cbn_region");
var _cbn_suscripcion = require("./cbn_suscripcion");
var _cbn_tiporegistro = require("./cbn_tiporegistro");
var _cbn_user_captcha = require("./cbn_user_captcha");
var _cbn_usuario = require("./cbn_usuario");
var _sessions = require("./sessions");
var _verification_requests = require("./verification_requests");

function initModels(sequelize) {
  var cbn_acreedor = _cbn_acreedor(sequelize, DataTypes);
  var cbn_acreedor_contacto = _cbn_acreedor_contacto(sequelize, DataTypes);
  var cbn_acuerdo = _cbn_acuerdo(sequelize, DataTypes);
  var cbn_auditoria = _cbn_auditoria(sequelize, DataTypes);
  var cbn_cliente = _cbn_cliente(sequelize, DataTypes);
  var cbn_comuna = _cbn_comuna(sequelize, DataTypes);
  var cbn_contacto = _cbn_contacto(sequelize, DataTypes);
  var cbn_deuda_declarada = _cbn_deuda_declarada(sequelize, DataTypes);
  var cbn_deuda_declarada_comentario = _cbn_deuda_declarada_comentario(sequelize, DataTypes);
  var cbn_deuda_real = _cbn_deuda_real(sequelize, DataTypes);
  var cbn_estado = _cbn_estado(sequelize, DataTypes);
  var cbn_flujo = _cbn_flujo(sequelize, DataTypes);
  var cbn_notificacion = _cbn_notificacion(sequelize, DataTypes);
  var cbn_password_change = _cbn_password_change(sequelize, DataTypes);
  var cbn_perfil = _cbn_perfil(sequelize, DataTypes);
  var cbn_perfil_permisos = _cbn_perfil_permisos(sequelize, DataTypes);
  var cbn_periodo = _cbn_periodo(sequelize, DataTypes);
  var cbn_permisos = _cbn_permisos(sequelize, DataTypes);
  var cbn_preguntas_usuario = _cbn_preguntas_usuario(sequelize, DataTypes);
  var cbn_provincia = _cbn_provincia(sequelize, DataTypes);
  var cbn_region = _cbn_region(sequelize, DataTypes);
  var cbn_suscripcion = _cbn_suscripcion(sequelize, DataTypes);
  var cbn_tiporegistro = _cbn_tiporegistro(sequelize, DataTypes);
  var cbn_user_captcha = _cbn_user_captcha(sequelize, DataTypes);
  var cbn_usuario = _cbn_usuario(sequelize, DataTypes);
  var sessions = _sessions(sequelize, DataTypes);
  var verification_requests = _verification_requests(sequelize, DataTypes);

  cbn_acreedor_contacto.belongsTo(cbn_acreedor, { as: "acreedor", foreignKey: "acreedor_id"});
  cbn_acreedor.hasMany(cbn_acreedor_contacto, { as: "cbn_acreedor_contactos", foreignKey: "acreedor_id"});
  cbn_deuda_declarada.belongsTo(cbn_acreedor, { as: "acreedor", foreignKey: "acreedor_id"});
  cbn_acreedor.hasMany(cbn_deuda_declarada, { as: "cbn_deuda_declaradas", foreignKey: "acreedor_id"});
  cbn_contacto.belongsTo(cbn_cliente, { as: "reference_cbn_cliente", foreignKey: "reference"});
  cbn_cliente.hasMany(cbn_contacto, { as: "cbn_contactos", foreignKey: "reference"});
  cbn_deuda_declarada.belongsTo(cbn_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cbn_cliente.hasMany(cbn_deuda_declarada, { as: "cbn_deuda_declaradas", foreignKey: "cliente_id"});
  cbn_password_change.belongsTo(cbn_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cbn_cliente.hasMany(cbn_password_change, { as: "cbn_password_changes", foreignKey: "cliente_id"});
  cbn_preguntas_usuario.belongsTo(cbn_cliente, { as: "cliente", foreignKey: "cliente_id"});
  cbn_cliente.hasMany(cbn_preguntas_usuario, { as: "cbn_preguntas_usuarios", foreignKey: "cliente_id"});
  cbn_acreedor.belongsTo(cbn_comuna, { as: "comuna", foreignKey: "comuna_id"});
  cbn_comuna.hasMany(cbn_acreedor, { as: "cbn_acreedors", foreignKey: "comuna_id"});
  cbn_cliente.belongsTo(cbn_comuna, { as: "comuna", foreignKey: "comuna_id"});
  cbn_comuna.hasMany(cbn_cliente, { as: "cbn_clientes", foreignKey: "comuna_id"});
  cbn_deuda_declarada_comentario.belongsTo(cbn_deuda_declarada, { as: "deuda_declarada", foreignKey: "deuda_declarada_id"});
  cbn_deuda_declarada.hasMany(cbn_deuda_declarada_comentario, { as: "cbn_deuda_declarada_comentarios", foreignKey: "deuda_declarada_id"});
  cbn_deuda_real.belongsTo(cbn_deuda_declarada, { as: "deuda_declarada", foreignKey: "deuda_declarada_id"});
  cbn_deuda_declarada.hasMany(cbn_deuda_real, { as: "cbn_deuda_reals", foreignKey: "deuda_declarada_id"});
  cbn_acuerdo.belongsTo(cbn_deuda_real, { as: "deuda_real", foreignKey: "deuda_real_id"});
  cbn_deuda_real.hasMany(cbn_acuerdo, { as: "cbn_acuerdos", foreignKey: "deuda_real_id"});
  cbn_deuda_declarada.belongsTo(cbn_estado, { as: "estado", foreignKey: "estado_id"});
  cbn_estado.hasMany(cbn_deuda_declarada, { as: "cbn_deuda_declaradas", foreignKey: "estado_id"});
  cbn_estado.belongsTo(cbn_flujo, { as: "flujo", foreignKey: "flujo_id"});
  cbn_flujo.hasMany(cbn_estado, { as: "cbn_estados", foreignKey: "flujo_id"});
  cbn_perfil_permisos.belongsTo(cbn_perfil, { as: "perfil", foreignKey: "perfil_id"});
  cbn_perfil.hasMany(cbn_perfil_permisos, { as: "cbn_perfil_permisos", foreignKey: "perfil_id"});
  cbn_usuario.belongsTo(cbn_perfil, { as: "perfil", foreignKey: "perfil_id"});
  cbn_perfil.hasMany(cbn_usuario, { as: "cbn_usuarios", foreignKey: "perfil_id"});
  cbn_deuda_declarada.belongsTo(cbn_periodo, { as: "periodo", foreignKey: "periodo_id"});
  cbn_periodo.hasMany(cbn_deuda_declarada, { as: "cbn_deuda_declaradas", foreignKey: "periodo_id"});
  cbn_perfil_permisos.belongsTo(cbn_permisos, { as: "permiso", foreignKey: "permiso_id"});
  cbn_permisos.hasMany(cbn_perfil_permisos, { as: "cbn_perfil_permisos", foreignKey: "permiso_id"});
  cbn_comuna.belongsTo(cbn_provincia, { as: "provincium", foreignKey: "provincia_id"});
  cbn_provincia.hasMany(cbn_comuna, { as: "cbn_comunas", foreignKey: "provincia_id"});
  cbn_provincia.belongsTo(cbn_region, { as: "region", foreignKey: "region_id"});
  cbn_region.hasMany(cbn_provincia, { as: "cbn_provincia", foreignKey: "region_id"});
  cbn_cliente.belongsTo(cbn_tiporegistro, { as: "tiporegistro", foreignKey: "tiporegistro_id"});
  cbn_tiporegistro.hasMany(cbn_cliente, { as: "cbn_clientes", foreignKey: "tiporegistro_id"});
  cbn_cliente.belongsTo(cbn_usuario, { as: "user", foreignKey: "user_id"});
  cbn_usuario.hasMany(cbn_cliente, { as: "cbn_clientes", foreignKey: "user_id"});
  cbn_deuda_declarada.belongsTo(cbn_usuario, { as: "user", foreignKey: "user_id"});
  cbn_usuario.hasMany(cbn_deuda_declarada, { as: "cbn_deuda_declaradas", foreignKey: "user_id"});
  cbn_deuda_real.belongsTo(cbn_usuario, { as: "user", foreignKey: "user_id"});
  cbn_usuario.hasMany(cbn_deuda_real, { as: "cbn_deuda_reals", foreignKey: "user_id"});
  sessions.belongsTo(cbn_usuario, { as: "user", foreignKey: "user_id"});
  cbn_usuario.hasMany(sessions, { as: "sessions", foreignKey: "user_id"});

  return {
    cbn_acreedor,
    cbn_acreedor_contacto,
    cbn_acuerdo,
    cbn_auditoria,
    cbn_cliente,
    cbn_comuna,
    cbn_contacto,
    cbn_deuda_declarada,
    cbn_deuda_declarada_comentario,
    cbn_deuda_real,
    cbn_estado,
    cbn_flujo,
    cbn_notificacion,
    cbn_password_change,
    cbn_perfil,
    cbn_perfil_permisos,
    cbn_periodo,
    cbn_permisos,
    cbn_preguntas_usuario,
    cbn_provincia,
    cbn_region,
    cbn_suscripcion,
    cbn_tiporegistro,
    cbn_user_captcha,
    cbn_usuario,
    sessions,
    verification_requests,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
