const JWT = require('jsonwebtoken')
const Usuario = require('../models/usuario')

module.exports = async (req, res, next) => {
    try {
        const cookies = req.cookies
        if ('token' in cookies) {
            const token = cookies.token
            const decoded = JWT.verify(token, "secret")
            console.log(decoded)
            let isAdminPro = await Usuario.findOne({
                where: {
                    email: decoded.email,
                    isAdmin: true
                }
            })
            if (isAdminPro) {
                next()
            } else {
                res.status(403).json({ message: "Acceso denegado" })
            }
        }
    } catch (error) {
        return res.status(401).json({ message: "autenticación fallida", error: error })
    }
}