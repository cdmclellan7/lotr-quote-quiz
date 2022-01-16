import { useReducer } from "react";
import MultipleChoice from "../MultipleChoice";
import Quote from "../Quote";

const GET_NEW_QUIZ = "GET_NEW_QUIZ";
const SHOW_ANSWERS = "SNOW_ANSWERS";
const UPDATE_SCORE = "UPDATE_SCORE";

function Quiz({ quotes, characters, movies }) {
	const [quizState, dispatch] = useReducer(quizReducer, {
		currentQuizData: null,
		score: 0,
		total: 0,
	});

	function quizReducer(state, action) {
		switch (action.type) {
			case GET_NEW_QUIZ:
				const currentQuote = getRandomQuote();
				const answer = getCharacterNameFromId(currentQuote.character);
				const allChoices = getRandomChoices(answer);
				return {
					...state,
					currentQuizData: {
						currentQuote,
						answer,
						allChoices,
					},
					isQuestionActive: true,
				};
			case SHOW_ANSWERS:
				return { ...state, isQuestionActive: false };
			case UPDATE_SCORE:
				return {
					...state,
					score: state.score + (action.answeredCorrectly ? 1 : 0),
					total: state.total + 1,
				};
			default:
				return state;
		}
	}

	function getRandomQuote() {
		const randomNum = Math.floor(Math.random() * quotes.length);
		const quote = quotes[randomNum];

		//recursively filter out quotes that are less than 3 words or are said by a "minor character"
		if (
			quote.dialog.split(" ").length > 2 &&
			getCharacterNameFromId(quote.character) !== "MINOR_CHARACTER"
		) {
			return quote;
		}
		return getRandomQuote();
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

	function answerQuestion(answeredCorrectly) {
		dispatch({ type: SHOW_ANSWERS });
		dispatch({ type: UPDATE_SCORE, answeredCorrectly });
	}

	return (
		<div id="quiz">
			<p>
				Score: {quizState.score}/{quizState.total}
			</p>
			{quizState.currentQuizData && (
				<Quote text={quizState.currentQuizData.currentQuote.dialog} />
			)}
			{quizState.currentQuizData && (
				<MultipleChoice
					allChoices={quizState.currentQuizData.allChoices}
					isShowingAnswers={!quizState.isQuestionActive}
					answerQuestion={answerQuestion}
				/>
			)}
			{quizState.currentQuizData && quizState.isQuestionActive ? (
				<></>
			) : (
				<button onClick={() => dispatch({ type: GET_NEW_QUIZ })}>
					Get New Quote
				</button>
			)}
		</div>
	);
}

export default Quiz;
