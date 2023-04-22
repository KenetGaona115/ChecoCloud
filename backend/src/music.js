const { v4 } = require('uuid')
const AWS = require('aws-sdk')

const dynamodb = new AWS.DynamoDB.DocumentClient();

const createUser = async (event) => {
    try {
        const id = v4()
        const body = JSON.parse(event.body)
        let newUser = {
            id,
            nombre: body.nombre,
            nombreUsuario: body.nombreUsuario,
            correo: body.correo,
            password: body.password
        }

        console.log(newUser)

        await dynamodb.put({
            TableName: 'User',
            Item: newUser
        }).promise()

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
              },
            body: JSON.stringify(newUser)
        }

    } catch (error) {
        console.error(error)
    }
}

const createSong = async (event) => {
    try {
        const id = v4()
        const body = JSON.parse(event.body)
        let newSong = {
            id,
            idUser: body.idUser,
            nombreCancion: body.nombreCancion,
            autor: body.autor,
            comentarios: body.comentarios,
            raiting: body.raiting
        }

        console.log(newUser)

        await dynamodb.put({
            TableName: 'Song',
            Item: newSong
        }).promise()

        return {
            statusCode: 200,
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin':'*'
              },
            body: JSON.stringify(newSong)
        }

    } catch (error) {
        console.error(error)
    }
}


const editTourney = (event) => {

}

const getAllSongsByUserId = async(event) => {
    const { id } = event.pathParameters;
    const result = await dynamodb.get({
        TableName: 'Song',
        Key: {"idUser": id} ,
    }).promise()

    const getSong = result.Item;

    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: getSong
    }
}

const getASongBySongIDandUserID = async(event) => {
    const { idsong } = event.pathParameters;
    const { iduser } = event.pathParameters;
    const result = await dynamodb.get({
        TableName: 'Song',
        Key: {"id": idsong} ,
        Key: {"idUser": iduser},
    }).promise()

    const getSong = result.Item;

    return {
        status: 200,
        headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin':'*'
          },
        body: getSong
    }
}



module.exports = {
    getAllSongsByUserId,
    createUser,
    createSong,
    getASongBySongIDandUserID
}