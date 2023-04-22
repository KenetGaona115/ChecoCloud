const helper = require('./helper');
const db = require('../database/db.user.json');

async function buscar(idcard) {
    let person = await getExistidCardPerson(idcard);
    //

    return person;

}
function getAllUsers() {
    return db.users;
}

function getUser(idU) {
    const data = helper.getJSON();
    console.log(data)
    const foundUser = data.users.find((user) => user.id == idU)
    let user
    if (foundUser) {
        user = foundUser
    }
    else {
        user = { mensaje: "usuario no encontrado" }
    }
    return user;
}

function getSesion(email, password) {
    const data = helper.getJSON();
    const foundUser = data.users.find((user) => user.correo == email && user.password == password)

    if (foundUser)
        return { code: 200, message: 'El usuario si existe' }
    else
        return { code: 400, message: 'error, usuario o contraseña incorrectos' }
}

module.exports = {
    getAllUsers: getAllUsers,
    getUser: getUser,
    getSesion: getSesion
}