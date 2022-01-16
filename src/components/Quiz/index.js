import { useReducer } from "react";

import Quote from "../Quote";

const GET_NEW_QUIZ = "GET_NEW_QUIZ";

function Quiz({ quotes, characters, movies }) {
	/*
	const [currentQuote, setCurrentQuote] = useState(null);
	const [currentMultipleChoice, setCurrentMultipleChoice] = useState();
    */

	const [currentQuizData, dispatch] = useReducer(quizReducer, null);

	function quizReducer(state, action) {
		switch (action.type) {
			case GET_NEW_QUIZ:
				const currentQuote = getRandomQuote();
				const answer = getCharacterNameFromId(currentQuote.character);
				const allChoices = getRandomChoices(answer);
				return { currentQuote, answer, allChoices };
			default:
				return state;
		}
	}

	function getRandomQuote() {
		const randomNum = Math.floor(Math.random() * quotes.length);
		return quotes[randomNum];
	}

	function getRandomCharacter() {
		const randomNum = Math.floor(Math.random() * characters.length);
		return characters[randomNum];
	}

	function getCharacterNameFromId(id) {
		const character = characters.find((character) => character.id === id);
		return character.name;
	}

	function getRandomChoices(name) {
		const choices = [{ name: name, isCorrect: true }];
		while (choices.length < 4) {
			let newCharacterName = getRandomCharacter().name;
			if (!choices.includes(newCharacterName)) {
				choices.push({ name: newCharacterName, isCorrect: false });
			}
		}
		return choices;
	}

	return (
		<div id="quiz">
			{currentQuizData && (
				<Quote text={currentQuizData.currentQuote.dialog} />
			)}
			{currentQuizData &&
				currentQuizData.allChoices.map((choice) => {
					return <p key={choice.name}>{choice.name}</p>;
				})}
			<button onClick={() => dispatch({ type: GET_NEW_QUIZ })}>
				Get New Quote
			</button>
		</div>
	);
}

export default Quiz;
