const { Sequelize } = require('sequelize')

const db = new Sequelize('postgres://postgres@localhost:5432/propiedades', {
    logging: false,

})

module.exports = db