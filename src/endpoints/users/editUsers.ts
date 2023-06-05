import { Request, Response } from "express";
import { TUser } from "../../types/TUser";
import { db } from "../../database/knex";

export const editUser = async (req: Request, res: Response) => {
    try {
        const id = req.params.userForEdit
        const { userForEdit } = req.body
        const emailDB = await db('users').select().where("EMAIL", "LIKE", `${userForEdit.email}`)
        if (emailDB === undefined) {
            let emailAceito = emailDB
            let passwordConfirm = req.body.password
            const checkoutEdit400 = {
                id: id,
                name: { name },
                email: emailAceito || userForEdit.email,
                password: (password === { passwordConfirm }) ? (true) : (false)

            },
            if (checkoutEdit400.password === true) {

                await db("users").insert(name, name, email) values(checkoutEdit400.name, checkoutEdit400.name, checkoutEdit400.password)
            }


        }
    }
                
        
        
        
        
                ; await db("users").insert(userAceito)
}
    } catch (err) {
    if (res.statusCode = 200) {
        res.status(500).send('500 inesperado')
    }
}
}
