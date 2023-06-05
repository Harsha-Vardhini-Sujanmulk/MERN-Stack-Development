const express = require("express");
const https = require("https");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	const query = req.body.cityName;
	const apiKey = "0d31f43b14fdcee998d0f2f81f8610ec";
	const unit = "metric";
	const url =
		"https://api.openweathermap.org/data/2.5/weather?lat=2.35&lon=48.85&appid=" +
		apiKey +
		"&units=" +
		unit +
		"&q=" +
		query;

	https.get(url, (response) => {
		console.log(response.statusCode);

		response.on("data", (data) => {
			const weatherData = JSON.parse(data);
			const temp = weatherData.main.temp;
			const weatherDescription = weatherData.weather[0].description;
			const icon = weatherData.weather[0].icon;
			const imageURL = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
			res.write("<p>the weather is currently " + weatherDescription + "</p>");
			res.write(
				"<h1>The temperature in "+ query +" is " + temp + " degrees Celcius</h1>"
			);
			res.write("<img src=" + imageURL + ">");
			res.send();
		});
	});
});

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
