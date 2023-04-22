const helper = require('./helper');

const db = require('../database/db.user.json');


async function buscar(idcard) {
    let person =await getExistidCardPerson(idcard);
    //
    
    return person;
    
}
function getAllUsers() {
    return db.users;
}

function getUser(idU){
    const data = helper.getJSON();
    console.log(data)
    const foundUser  = data.users.find((user) => user.id == idU)
    let user
    if(foundUser){
        user = foundUser
    }
    else{
        user = {mensaje:"usuario no encontrado"}
    }
    return user;

}

module.exports = {
    getAllUsers:getAllUsers,
    getUser:getUser
}