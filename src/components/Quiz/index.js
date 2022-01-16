import { useReducer } from "react";
import MultipleChoice from "../MultipleChoice";
import Quote from "../Quote";

const GET_NEW_QUIZ = "GET_NEW_QUIZ";
const SHOW_ANSWERS = "SNOW_ANSWERS";

function Quiz({ quotes, characters, movies }) {
	const [currentQuizData, dispatch] = useReducer(quizReducer, null);

	function quizReducer(state, action) {
		switch (action.type) {
			case GET_NEW_QUIZ:
				const currentQuote = getRandomQuote();
				const answer = getCharacterNameFromId(currentQuote.character);
				const allChoices = getRandomChoices(answer);
				return {
					currentQuote,
					answer,
					allChoices,
					isQuestionActive: true,
				};
			case SHOW_ANSWERS:
				return { ...state, isQuestionActive: false };
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
			{currentQuizData && (
				<MultipleChoice
					allChoices={currentQuizData.allChoices}
					isShowingAnswers={!currentQuizData.isQuestionActive}
					showAnswers={() => dispatch({ type: SHOW_ANSWERS })}
				/>
			)}
			{currentQuizData && currentQuizData.isQuestionActive ? (
				<></>
			) : (
				<button onClick={() => dispatch({ type: GET_NEW_QUIZ })}>
					{" "}
					Get New Quote
				</button>
			)}
		</div>
	);
}

export default Quiz;
