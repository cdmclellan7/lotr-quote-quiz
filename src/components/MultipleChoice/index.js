function MultipleChoice({ allChoices }) {
	return (
		<div id="multiple-choice">
			{allChoices.map((choice) => {
				return <p key={choice.name}>{choice.name}</p>;
			})}
		</div>
	);
}

export default MultipleChoice;
