import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import { getRandomQuote } from './quotes.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 4000;
const allowedOrigin = process.env.CORS_ORIGIN || '*';

app.use(express.json());
app.use(morgan('dev'));
app.use(
	cors({
		origin: allowedOrigin === '*' ? true : allowedOrigin
	})
);

app.get('/api/health', (_req, res) => {
	res.json({ status: 'ok' });
});

app.get('/api/quote', (_req, res) => {
	const quote = getRandomQuote();
	res.json(quote);
});

app.use((_req, res) => {
	res.status(404).json({ error: 'Not found' });
});

app.listen(port, () => {
	// eslint-disable-next-line no-console
	console.log(`Server listening on http://localhost:${port}`);
});


