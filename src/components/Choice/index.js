function Choice({ text, isCorrect }) {
	function handleClick(e) {
		if (isCorrect) {
			e.target.style.backgroundColor = "green";
		} else {
			e.target.style.backgroundColor = "red";
		}
	}
	return <button onClick={handleClick}>{text}</button>;
}

export default Choice;
