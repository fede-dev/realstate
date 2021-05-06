const express = require('express')
const router = express.Router()

const usuarios = require('./usuario.routes')
const propiedades = require('./propiedad.routes')
const review = require('./review.routes')



router.use('/usuarios', usuarios)
router.use('/propiedades', propiedades)
router.use('/reviews', review)





module.exports = router