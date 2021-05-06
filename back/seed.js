const Propiedad = require('./models/propiedad')
const Categoria = require('./models/categoria')

const casa1 = {
    tipo: "casa",
    precio: 123,
    direccion: "arenales 2020",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

const casa2 = {
    tipo: "casa",
    precio: 456,
    direccion: "9 de julio 1234",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

const casa3 = {
    tipo: "casa",
    precio: 789,
    direccion: "berutti 543",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

const casa4 = {
    tipo: "casa",
    precio: 789,
    direccion: "berutti 543",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

const casa5 = {
    tipo: "casa",
    precio: 789,
    direccion: "berutti 543",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

const casa6 = {
    tipo: "casa",
    precio: 789,
    direccion: "berutti 543",
    localidad: "caba",
    url_pic: "http/img",
    disponible: true
}

// const casa7 = {
//     tipo: "casa",
//     precio: 789,
//     direccion: "berutti 543",
//     localidad: "caba",
//     url_pic: "http/img",
//     disponible: true
// }
// const casa8 = {
//     tipo: "casa",
//     precio: 789,
//     direccion: "berutti 543",
//     localidad: "caba",
//     url_pic: "http/img",
//     disponible: true
// }
// const casa9 = {
//     tipo: "casa",
//     precio: 789,
//     direccion: "berutti 543",
//     localidad: "caba",
//     url_pic: "http/img",
//     disponible: true
// }


const array = [casa1, casa2, casa3, casa4, casa5, casa6]


const catePromise = function () {
    Propiedad.bulkCreate(array)
        .then(res => {
            console.log("Categoria creadas")
            return res
        })
}

Promise.all([catePromise()]).then((x) => {
    console.log("base de datos seedeada OK")
    return x;
});