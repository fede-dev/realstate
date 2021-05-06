const { Sequelize, DataTypes, Model } = require('sequelize')
const db = require('../db/index')
const bcrypt = require('bcrypt')


class Usuario extends Model { }

Usuario.init({
    username: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    nombre: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
            isAlpha: {
                args: true,
                msg: "El nombre sólo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "El nombre puede contener de 3 a 255 caracteres"
            },
        },
    },

    apellido: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "El campo no puede ser nulo"
            },
            isAlpha: {
                args: true,
                msg: "El nombre sólo puede contener letras"
            },
            len: {
                args: [3, 255],
                msg: "El nombre puede contener de 3 a 255 caracteres"
            },
        },
    },

    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            isEmail: {
                args: true,
                msg: "El campo tiene que ser un correo válido"
            },
        },
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notEmpty: true },
    },

    // salt: {
    //     type: DataTypes.STRING
    // },

    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false,

    },

}, { sequelize: db, 
    modelName: "usuario", 
    //tableName: 'Empleados' 
    timestamps: false
})


module.exports = Usuario