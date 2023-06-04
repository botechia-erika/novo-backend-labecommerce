import colors from 'colors'
import express, { Request, Response } from 'express';
import cors from 'cors';
import { createUser } from './endpoints/users/createUsers';
const PORT = 4545
const app = express()


app.use(cors())
app.use(express.json())
app.use(colors)
//app.get('/users', getUsers)
app.post('/users/create', createUser)   
app.edit('/')

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})



