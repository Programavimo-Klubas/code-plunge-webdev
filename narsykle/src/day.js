import React from "react"

function Day(props) {
	const title = props.title;
	const temperature = props.temperature;

	return <div>
		{title} - {temperature}
	</div>
}

export default Day;
