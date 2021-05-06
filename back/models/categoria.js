const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/index')



class Categoria extends Model { }

Categoria.init({
    nombre:{ 
        type: DataTypes.STRING,
        allowNull: false
    }
}, { sequelize: db, modelName: "categoria" })

module.exports = Categoria