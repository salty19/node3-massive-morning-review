const express = require("express")
const cors = require("cors")
const cc = require("./controllers/characterController")
const massive = require('massive')
require('dotenv').config()

const app = express()

const {SERVER_PORT, CONNECTION_STRING} = process.env 

app.use(cors())
app.use(express.json())

massive({
    connectionString: CONNECTION_STRING,
    ssl: {rejectUnauthorized: false}
}).then(db => {
    app.set('db',db)
    console.log('db connected')
    app.listen(SERVER_PORT, () => console.log(`Server listening on Port:${SERVER_PORT}`))
})

app.get('/api/characters', cc.getAllCharacters)
app.get('/api/character/:id', cc.getCharacter)
app.post('/api/characters', cc.addCharacter)
app.put('/api/characters/:id', cc.editCharacter)
app.delete('/api/characters/:id', cc.deleteCharacter)

