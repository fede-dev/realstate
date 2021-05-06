const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/index')

class Review extends Model { }

Review.init({
    comentario: {
        type: DataTypes.TEXT,
        allowNull: false,
    },

    puntaje: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

}, { sequelize: db, modelName: "review" })

module.exports = Review