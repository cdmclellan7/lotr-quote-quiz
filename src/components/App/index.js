import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [quoteData, setQuoteData] = useState(null);

	useEffect(() => {
		async function fetchQuoteData() {
			const data = await fetch(
				"https://the-one-api.dev/v2/book"
			);
			const json = await data.json();

			setQuoteData(json);
		}

		fetchQuoteData();
	}, []);
	return (
		<div className="App">
			<h1>
				Welcome to the
				LOTR Movie Quote
				Quiz
			</h1>
			<p>
				{JSON.stringify(
					quoteData
				)}
			</p>
		</div>
	);
}

export default App;
