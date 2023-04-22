const express = require('express')
const router = express.Router()
const db = require('../database/db.database')

router.get("/getallusers", async (req, res, next)=>{
    const usuarios = await db.getAllUsers()
    res.send(usuarios)
 })

 router.get("/getuserbyid", async(req, res, next)=>{
    const { id } = req.query
    const usuario = await db.getUser(id)
    
    res.send(usuario)
 })


module.exports = router;