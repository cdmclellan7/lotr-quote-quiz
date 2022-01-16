function MultipleChoice({ allChoices }) {
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
					<p
						key={choice.name}
						style={{
							backgroundColor: choice.isCorrect ? "green" : "red",
						}}
					>
						{choice.name}
					</p>
				);
			})}
		</div>
	);
}

export default MultipleChoice;
