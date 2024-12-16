import express from 'express'
import mongoose from 'mongoose'
import { Stock } from '../models/stockModel.js'

const router = express.Router();


// Get all in stock
router.get('/stocks', async (req, res) => {
	try {
		const stock = await Stock.find();
		return res.status(200).json({ data: stock });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});



// Add to watchlist
router.put('/stocks/:id', async (req, res) => {
	try {
		const { company, description, initial_price, price_2002, price_2007, symbol, watchlist } = req.body;
		const { id } = req.params;

		const requiredFields = ["company", "description", "initial_price", "price_2002", "price_2007", "symbol", "watchlist"];
		const missingFields = requiredFields.filter(field => req.body[field] === undefined);
		
		if (missingFields.length > 0) {
			return res.status(400).send({ message: `Missing required field: ${missingFields.join(', ')}`});
		}

		const updateData = {
			company: company,
			description: description,
			initial_price: initial_price,
			price_2002: price_2002,
			price_2007: price_2007,
			symbol: symbol,
			watchlist: watchlist,
		}

		const result = await Stock.findByIdAndUpdate(id, updateData, { new: true });

		if (!result) {
			return res.status(404).json({ message: "Stock not found" });
		}

		return res.status(200).send({ message: "Stock updated successfully" });
	} catch (error) {
		console.error(error);
		res.status(500).send({ message: error.message });
	}
});


export default router;