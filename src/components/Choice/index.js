function Choice({ text, isCorrect, showAnswers, isShowingAnswers }) {
	return (
		<button
			onClick={showAnswers}
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
