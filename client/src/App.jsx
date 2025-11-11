import React, { useEffect, useState } from 'react';
import { fetchRandomQuote } from './api.js';

export default function App() {
	const [quote, setQuote] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	async function loadQuote() {
		try {
			setError('');
			setLoading(true);
			const q = await fetchRandomQuote();
			setQuote(q);
		} catch (e) {
			setError(e?.message || 'Failed to fetch quote');
		} finally {
			setLoading(false);
		}
	}

	useEffect(() => {
		loadQuote();
	}, []);

	return (
		<div className="app">
			<div className="card">
				{quote && (
					<>
						<blockquote>“{quote.text}”</blockquote>
						<cite>— {quote.author}</cite>
					</>
				)}
				{!quote && !loading && !error && <p>Click the button to get inspired.</p>}
				{loading && <p>Loading…</p>}
				{error && <p role="alert">Error: {error}</p>}
				<div className="row">
					<button onClick={loadQuote} disabled={loading}>
						{loading ? 'Getting another…' : 'New quote'}
					</button>
					{quote && (
						<a
							href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
								`“${quote.text}” — ${quote.author}`
							)}`}
							target="_blank"
							rel="noreferrer"
						>
							<button>Share</button>
						</a>
					)}
				</div>
				<div className="footer">Powered by Express + React • Deployed on Render</div>
			</div>
		</div>
	);
}


