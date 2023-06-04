import { Request, Response } from "express";
import { TUser } from "../../types/TUser";
import { db } from "../../database/knex";

export const createUser = async (req: Request, res: Response) => {
    try {
        const { astro } = req.body
        const astro1 = { id: astro.id, name: astro.name, email: astro.email, password: astro.password }
    }catch{
        if(res.statusCode = 200){
            res.status(500).send('500 inesperado')
        }
    }

/*
app.post("/authors/create", async (req: Request, res: Response) => {

    try {
        const id = req.body.id
        const name = req.body.name
        const username = req.body.username
        const email = req.body.email
        const password = req.body.password
        const role = req.body.role


        if (typeof id !== typeof "string") {
            res.status(400).send({ message: 'nome invalido' })
        }

        if (typeof name != "string") {
            res.status(400).send({ message: 'nome invalido' })
        }
        if (typeof username != "string") {
            res.status(400).send('username alfa-numerico')
        }
        if (typeof email != "string") {
            res.status(400).send('username alfa-numerico')
        }
        if (typeof password != "string") {
            res.status(400).send("outra senha essa é invalida tente alfa-numerico")
        }
        if (typeof role != "string") {
            res.status(400).send('username alfa-numerico')
        }

        const newAuthor: { id: string, name: string, username: string, email: string, password: string, role: string } = {
            id,
            name,
            username,
            email,
            password,
            role
        }
        await db("authors").insert(newAuthor)
        res.status(200).send("cadastro com sucesso")
    } catch (error) {
        console.log(error)

        if (req.statusCode === 200) {
            res.status(500)
        }

        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
})

*/