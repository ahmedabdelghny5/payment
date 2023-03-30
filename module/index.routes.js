import userRoutes from './user/user.routes.js'
import express from 'express';
import {dbConnection} from '../DB/dbConnection.js'
import { AppError } from '../utils/AppError.js';
import { globalError } from '../utils/globalError.js';


export const appRouter = (app) => {
    
    app.use(express.json())
    //api setUp routing
    app.use('/user', userRoutes)

    //invalid page 
    app.use("*", (req, res, next) => {
        // res.json({ msg: "el path bt3k 8lt ya m3lm" })
        next(new AppError(`invalid routing ${req.originalUrl}`, 400))
    })
    //error handing
    app.use(globalError)

    //connection data base
    dbConnection()
}