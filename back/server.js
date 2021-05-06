const express = require('express')
const db = require('./db/index')
const path = require('path')
const morgan = require('morgan')
const cors = require('cors')
const cookieParser = require('cookie-parser')


const app = express()
const PORT = process.env.PORT || 3000

const routes = require('./routes/index')


require("dotenv").config()
app.use(express.static(__dirname + "/public"));
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(cors());
app.use(cookieParser())


app.use('/api', routes)

app.use("/*", function (req, res) {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.get('/', (req, res) => {
    res.send("Home")
})

//error middleware
app.use((err, req, res, next) => {
    console.log(err.stack)
    res.status(500).send(err)
})


db.sync({ force: false }).then(() => {
    console.log("DB synchronized")
    app.listen(PORT, () => {
        console.log(`Server in running at PORT ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})


