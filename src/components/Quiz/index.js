import { useState } from "react";

function Quiz({ quotes, characters, movies }) {
	const [currentQuote, setCurrentQuote] = useState(null);

	function getRandomQuote() {
		const randomNum = Math.floor(Math.random() * quotes.length);
		setCurrentQuote(quotes[randomNum]);
	}

	return (
		<div id="quiz">
			{currentQuote && <p>{currentQuote.dialog}</p>}
			<button onClick={getRandomQuote}>Get New Quote</button>
		</div>
	);
}

export default Quiz;
