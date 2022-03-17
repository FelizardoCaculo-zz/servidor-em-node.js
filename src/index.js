const express = require('express')
const res = require('express/lib/response')
const path = require('path')

const app = express()

const router = express.Router()

router.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/home.html'))
})

router.get('/contato', (req, res)=>{
    res.sendFile(path.join(__dirname + '/pages/contato.html'))
})

app.use(router)

app.listen(3333, ()=>{
    console.log('Servidor Rodando!')
})




