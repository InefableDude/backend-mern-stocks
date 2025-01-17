import mongoose from 'mongoose';

const stockSchema = mongoose.Schema(
		{
			company: {
				type: String,
				required: true,
			},
			description: {
				type: String,
				required: true,
			},
			initial_price: {
				type: Number,
				required: true,
			},
			price_2002: {
				type: Number,
				required: true,
			},
			price_2007: {
				type: Number,
				required: true,
			},
			symbol: {
				type: String,
				required: true,
			},
			watchlist: {
				type: Boolean,
				required: true,
			},
		}
	);

export const Stock = mongoose.model("Stock", stockSchema);