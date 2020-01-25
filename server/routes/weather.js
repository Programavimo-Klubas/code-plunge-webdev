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

module.exports = router;
