const express = require('express')
require('dotenv').config()
const app = express()

let { SERVER_PORT } = process.env

const userCtrl = require('./userCtrl')

app.use(express.json())

app.listen(SERVER_PORT, () => console.log(`listening on ${SERVER_PORT}`))

app.get('/api/user', userCtrl.getAllUsers)
app.get('/api/user/:userId', userCtrl.getUser)
app.get('/api/admin', userCtrl.getAdmins)
app.get('/api/nonadmin', userCtrl.getNotAdmin)
app.get('/api/type/:userType', userCtrl.getUserType)
app.put('/api/user/:userId', userCtrl.updateUser)
app.post('/api/user', userCtrl.addUser)
app.delete('/api/user/:userId', userCtrl.deleteUser)