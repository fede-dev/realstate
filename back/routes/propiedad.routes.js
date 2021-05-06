const express = require('express')
const router = express.Router()
const { Propiedad, Usuario, Review } = require('../models')

router.get('/', (req, res, next) => {
    Propiedad.findAll()
        .then((propiedad) => {
            res.status(200).json(propiedad)
        }).catch((err => {
            console.log(err)
        }))
})


router.post('/', async (req, res, next) => {
    const propiedad = req.body
    const usuario = await Usuario.findOne({
        where: {
            id: 1
        }
    })
    Propiedad.create(propiedad)
        .then((prop) => {
            //console.log(Object.keys(prop.__proto__))
            return prop.setUsuario(usuario)
                .then((prop) => {
                    res.status(200).json(prop)
                })

        }).catch(next)
})


router.get('/:id', (req, res, next) => {
    const buscandoId = req.params.id
    Propiedad.findByPk(buscandoId)
        .then((propiedad) => {
            res.status(201).json(propiedad)
        }).catch(next)
})


router.put('/:id', (req, res, next) => {
    Propiedad.update({
        tipo: req.body.tipo,
        precio: req.body.precio,
        direccion: req.body.direccion,
        localidad: req.body.localidad,
        url_pic: req.body.url_pic,
        disponible: req.body.disponible,
    }, {
        where: {
            id: req.params.id
        }
    }).then((propiedadActualizada) => {
        res.status(200).json(propiedadActualizada)
    }).catch(next)
})


router.delete('/:id', (req, res, next) => {
    Propiedad.destroy({
        where: {
            id: req.params.id
        }
    }).then((eliminar) => {
        res.status(200).json(eliminar)
    }).catch(next)
})

module.exports = router