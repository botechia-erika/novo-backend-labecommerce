import { Request, Response } from "express";
import { createUser } from "./createUsers";
const Router = express.router()

export const userRouter = {
createUser: express().post("/users/create", createUser)
}
