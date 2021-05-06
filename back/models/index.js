const db = require('../db/index')
const Propiedad = require('./propiedad')
const Review = require('./review')
const Usuario = require('./usuario')
const Categoria = require('./categoria')


Propiedad.hasMany(Review)
Review.belongsTo(Propiedad)

Usuario.hasMany(Review)
Review.belongsTo(Usuario)

Usuario.hasMany(Propiedad)
Propiedad.belongsTo(Usuario)

Propiedad.belongsToMany(Usuario, { through: 'favoritos' })



module.exports = { Propiedad, Review, Usuario, db }