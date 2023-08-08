import express, {Request, Response, NextFunction} from 'express';
import dotenv from 'dotenv'
import customerRoutes from './routes/e-commerce.routes'

// load env vars
dotenv.config({path: './config/config.env'})

const app = express();

app.use('/', customerRoutes)

app.use((err:Error, req:Request, res:Response, next:NextFunction)=> {
  res.status(500).json({message:err.message})
})

const PORT = process.env.PORT

app.listen(PORT)
