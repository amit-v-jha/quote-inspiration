const API_BASE =
	(typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.VITE_API_URL) ||
	'http://localhost:4000';

export async function fetchRandomQuote() {
	const res = await fetch(`${API_BASE}/api/quote`);
	if (!res.ok) {
		throw new Error(`API error (${res.status})`);
	}
	return res.json();
}


