import { useState } from "react";

import Quote from "../Quote";

function Quiz({ quotes, characters, movies }) {
	const [currentQuote, setCurrentQuote] = useState(null);

	function getRandomQuote() {
		const randomNum = Math.floor(Math.random() * quotes.length);
		setCurrentQuote(quotes[randomNum]);
	}

	return (
		<div id="quiz">
			{currentQuote && <Quote text={currentQuote.dialog} />}
			<button onClick={getRandomQuote}>Get New Quote</button>
		</div>
	);
}

export default Quiz;
