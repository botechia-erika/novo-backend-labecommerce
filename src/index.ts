import express, { Request, Response } from 'express';
import cors from 'cors';


const app = express()


app.use(cors())
app.use(express.json())


app.listen(3030, () => {
    console.log(`Servidor rodando na porta ${3030}`)
})



