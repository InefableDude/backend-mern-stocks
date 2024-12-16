// Librerias
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// ENV
dotenv.config();

const {
	PORT = 3000,
	mongoDBURL = "none"
} = process.env;

// Modelos

import { Stock } from './models/stockModel.js'

// Import Routes

import stockRoutes from './routes/stockRoute.js'

// Iniciar app

const app = express();

// Middlewares

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", stockRoutes);

// Usar rutas


// Rutas

app.get("/", (req, res) => {
	res.status(234).send("Welcome");
});


// Conexion a base de datos

mongoose.connect(mongoDBURL)
	.then(() => {
		console.log("App connected to database");
		
		// Levantar el servidor
		app.listen(PORT, () => {
			console.log(`App is listening to PORT: ${PORT}`);
		});
	})
	.catch(error => {
		console.error(error);
	})