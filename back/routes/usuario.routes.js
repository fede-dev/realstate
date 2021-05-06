const express = require('express')
const router = express.Router()
const { Usuario } = require('../models/')
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const checkAuth = require('../middleware/auth')
const checkAdmin = require('../middleware/admin')


router.get('/todos', async (req, res) => {
    try {
        const usuario = await Usuario.findAll();
        console.log('Conseguir usuarios')
        res.status(200).json({ usuario });

    } catch (err) {
        res.status(500).json({ error: err });
    }

})




router.get('/', checkAdmin, async (req, res) => {
    try {
        const usuario = await Usuario.findAll();
        console.log('Conseguir usuarios')
        res.status(200).json({ usuario });

    } catch (err) {
        res.status(500).json({ error: err });
    }

})



router.post('/login', async (req, res) => {
    const { email, password } = req.body.datos
    console.log(req.body.datos)
    try {
        const usuario = await Usuario.findOne({
            where: {
                email: email
            }
        })
        //console.log(usuario)

        if (!usuario) {
            res.status(401).json({ message: "No autorizado" })
        } else {
            bcrypt.compare(password, usuario.password, (err, result) => {
                if (err) {
                    res.status(401).json({ message: "No autorizado" })
                } else {
                    let token = JWT.sign({
                        email: email,
                    }, 
                    "secret", 
                    { expiresIn: "1h" })
                    
                    res.cookie("token", token, { httpOnly: true })
                    res.cookie("id", usuario.id, { httpOnly: true })
                    res.status(200).json({ message: usuario, token })
                }
            })
        }
    } catch (err) {
        res.status(400).json({ error: "El usuario o la contraseña son incorrectos" });
    }
});



router.post('/registro', async (req, res) => {
    const { username, nombre, apellido, email, password, isAdmin = true } = req.body.datos;
    try {
        const usernameAlreadyRegistered = await Usuario.findAll({
            where: { username: username },
        });

        const emailAlreadyRegistered = await Usuario.findAll({ where: { email } });

        if (usernameAlreadyRegistered.length) {
            res
                .status(409)
                .json({ message: `Nombre de usuario en uso, por favor elija otro` });
        } else if (emailAlreadyRegistered.length) {
            res.status(409).json({
                message: `El email está vinculado con una cuenta`,
            });
        } else {
            bcrypt.hash(password, 10, async (err, hash) => {
                if (err) {
                    return res.status(500).json({
                        error: err,
                    });
                } else {
                    const newUser = await Usuario.create({
                        username,
                        nombre,
                        apellido,
                        email,
                        password: hash,
                        isAdmin,
                    });
                    res.status(200).json({ message: '¡Usuario creado con éxito!' });
                }
            });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: "faltan campos o se produjo un error" });
    }
});

router.get('/privado', checkAdmin, function (req, res) {
    res.status(200).send('entraste ')
})


router.delete('/delete', async (req, res) => {
    try {
        const data = req.body.email
        const removerUsuario = await Usuario.destroy({
            where: {
                email: data
            }
        })
        if (!removerUsuario) {
            return res.status(404).json({ msessage: "Usuario no encontrado" })
        } else {
            res.status(200).json({ message: "Usuario eliminado" })
        }
    } catch (err) {
        console.log(err)
        res.status(500).json({ message: "Error" })
    }
})


module.exports = router