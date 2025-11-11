const QUOTES = [
	{
		text: 'The best way to predict the future is to invent it.',
		author: 'Alan Kay'
	},
	{
		text: 'Whether you think you can or you think you can’t, you’re right.',
		author: 'Henry Ford'
	},
	{
		text: 'Do not wait to strike till the iron is hot; make it hot by striking.',
		author: 'William Butler Yeats'
	},
	{
		text: 'It always seems impossible until it’s done.',
		author: 'Nelson Mandela'
	},
	{
		text: 'Simplicity is the ultimate sophistication.',
		author: 'Leonardo da Vinci'
	},
	{
		text: 'What you do speaks so loudly that I cannot hear what you say.',
		author: 'Ralph Waldo Emerson'
	},
	{
		text: 'If I have seen further it is by standing on the shoulders of Giants.',
		author: 'Isaac Newton'
	},
	{
		text: 'The only limit to our realization of tomorrow is our doubts of today.',
		author: 'Franklin D. Roosevelt'
	},
	{
		text: 'Make each day your masterpiece.',
		author: 'John Wooden'
	},
	{
		text: 'You miss 100% of the shots you don’t take.',
		author: 'Wayne Gretzky'
	}
];

export function getRandomQuote() {
	const index = Math.floor(Math.random() * QUOTES.length);
	return QUOTES[index];
}


