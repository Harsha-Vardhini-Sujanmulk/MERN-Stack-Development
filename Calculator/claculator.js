const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
	res.sendFile(__dirname + "/index.html");
});

app.post("/", (req, res) => {
	var num1 = Number(req.body.a);
	var num2 = Number(req.body.b);
	var result = num1 + num2;
	res.send("The result of the calculation is " + result);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
