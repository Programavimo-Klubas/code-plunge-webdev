const express = require("express");

const router = express.Router();

const days = [
	{
		title: "Pirmadienis",
		temp: 12,
	},
	{
		title: "Antradienis",
		temp: 9,
	},
	{
		title: "Treciadienis",
		temp: 11,
	},
];

router.get("/", function(request, response) {
	response.setHeader("Content-type", "application/json");
	response.send(JSON.stringify(days));
});

const dayTemperature = {
	Pirmadienis: [10, 11, 12, 11, 10],
	Antradienis: [9, 10, 10, 9, 8],
	Treciadienis: [],
};

router.get("/:day", function(request, response) {
	const day = request.params.day;
	const temperature = dayTemperature[day];

	response.setHeader("Content-type", "application/json");
	response.send(JSON.stringify(temperature));
});

module.exports = router;
