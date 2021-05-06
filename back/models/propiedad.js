const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/index')

class Propiedad extends Model { }

Propiedad.init({

    tipo: {
        type: DataTypes.ENUM(["casa", "depto", "ph"])// revisar
    },

    precio: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    direccion: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    localidad: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    url_pic: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    disponible: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
    },


    // truncarDescripcion: {
    //     type: Sequelize.VIRTUAL,
    //     get: function () {
    //         return this.disponible.slice(0, 20) + "..."
    //     },
    // },
}, { sequelize: db, modelName: "propiedad" })


Propiedad.beforeCreate((propiedad, options) => {
    if (propiedad.disponible == false) {
        return this.direccion += `no está disponible`// modificar la propiedad direccion
    }
})

//afterUpdate(instance, options) 

// Propiedad.addHook('afterUpdate', (instance, options) => { console.log(options) })



module.exports = Propiedad