import { useEffect, useState } from "react";

import "./App.css";

function App() {
	const [quoteData, setQuoteData] = useState([]);
	const [movieData, setMovieData] = useState(null);
	const [characterData, setCharacterData] = useState(null);

	useEffect(() => {
		async function fetchMovieData() {
			const data = await fetch("https://the-one-api.dev/v2/movie", {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			const json = await data.json();

			setMovieData(
				json.docs.map((movie) => {
					return { id: movie["_id"], name: movie.name };
				})
			);
		}

		//this API endpoint only gives quotes from Two Towers and Return of the King
		async function fetchTwoTowersAndReturnOfTheKingQuotes() {
			const data = await fetch("https://the-one-api.dev/v2/quote", {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			const json = await data.json();

			setQuoteData((quoteData) => [...quoteData, ...json.docs]);
		}

		//Fetches Fellowship quotes and add them to the other movie quotes fetched in the previous function
		async function fetchFellowshipQuotes() {
			const data = await fetch(
				"https://the-one-api.dev/v2/movie/5cd95395de30eff6ebccde5c/quote",
				{
					headers: {
						Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
					},
				}
			);
			const json = await data.json();
			setQuoteData((quoteData) => [...quoteData, ...json.docs]);
		}

		async function fetchCharacterData() {
			const data = await fetch("https://the-one-api.dev/v2/character", {
				headers: {
					Authorization: `Bearer ${process.env.REACT_APP_API_KEY}`,
				},
			});
			const json = await data.json();

			setCharacterData(
				json.docs.map((character) => {
					return {
						id: character["_id"],
						name: character.name,
					};
				})
			);
		}

		fetchTwoTowersAndReturnOfTheKingQuotes();
		fetchFellowshipQuotes();
		fetchMovieData();
		fetchCharacterData();
	}, []);
	return (
		<div className="App">
			<h1>Welcome to the LOTR Movie Quote Quiz</h1>
			<p>{JSON.stringify(movieData)}</p>
			<p>{JSON.stringify(quoteData)}</p>
		</div>
	);
}

export default App;
