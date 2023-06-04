import { Request, Response } from "express";

import { db } from "../../database/knex";
export const getUsers = async (req: Request, res: Response) => {
    try {
        const result = db.raw(`SELECT * FROM USERS`)
        res.status(200).send({ users: result, message: "cadastramento com sucesso" })
    } catch (error) {
        if (error instanceof Error) {
            res.send(error.message)
        } else {
            res.send("Erro inesperado")
        }
    }
}
