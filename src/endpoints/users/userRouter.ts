import { Request, Response } from "express";
import { createUser } from "./createUsers";
const Router = express.router()

export const userRouter = {
createUser: express().post("/users/create", createUser)
}


const usersControllers = require('./../controllers/usersControllers.js');
const express = require('express');
const router = express.Router();


export const userRouter =(usersControllers)=> {
router.get('/', usersControllers.editUser);
router.get('/users/create', usuariosRouters.createUser);
router.get('/users/login', usuariosRouters.loginResponse);
router.post('/account/:id', usuario.loginResponse);
router.put('/account/:id/edit', usuario.editUser)
router.get('/account/:id', usersController.deleteUser)
router.get('/login/error', usuariosRouters.loginError);
router.get('/cadastro', usersControllers.registerU);
}
