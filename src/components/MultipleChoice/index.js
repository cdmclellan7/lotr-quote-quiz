import Choice from "../Choice";

function MultipleChoice({ allChoices, showAnswers, isShowingAnswers }) {
	function makeSortedOrder(arr) {
		return arr.sort((a, b) => {
			const nameA = a.name.toUpperCase();
			const nameB = b.name.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}
			return 0;
		});
	}

	return (
		<div id="multiple-choice">
			{makeSortedOrder(allChoices).map((choice) => {
				return (
					<Choice
						key={choice.name}
						text={choice.name}
						isCorrect={choice.isCorrect}
						showAnswers={showAnswers}
						isShowingAnswers={isShowingAnswers}
					/>
				);
			})}
		</div>
	);
}

export default MultipleChoice;
