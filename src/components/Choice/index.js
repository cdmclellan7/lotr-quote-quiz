function Choice({ text, isCorrect, answerQuestion, isShowingAnswers }) {
	return (
		<button
			onClick={() => answerQuestion(isCorrect)}
			style={
				isShowingAnswers
					? { backgroundColor: isCorrect ? "green" : "red" }
					: {}
			}
		>
			{text}
		</button>
	);
}

export default Choice;
