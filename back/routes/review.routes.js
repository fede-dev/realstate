const express = require('express')
const router = express.Router()
const Review = require('../models/review')

router.get('/', (req, res, next) => {
    Review.findAll()
        .then((coment) => {
            res.status(200).json(coment)
        }).catch(next)
})


router.post('/', (req, res, next) => {
    const comentario = req.body
    Review.create(comentario)
        .then((com) => {
            res.status(201).json(com)
        }).catch(next)
})


router.get('/:id', (req, res, next) => {
    const buscandoId = req.params.id
    Review.findByPk(buscandoId)
        .then((comentario) => {
            res.status(201).json(comentario)
        }).catch(next)
})


router.put('/:id', (req, res, next) => {
    Review.update({
        comentario: req.body.comentario,
        puntaje: req.body.puntaje,
    }, {
        where: {
            id: req.params.id
        }
    }).then((comentarioActualizado) => {
        res.status(200).json(comentarioActualizado)
    }).catch(next)
})


router.delete('/:id', (req, res, next) => {
    Review.destroy({
        where: {
            id: req.params.id
        }
    }).then((eliminar) => {
        res.status(200).json(eliminar)
    }).catch(next)
})

module.exports = router