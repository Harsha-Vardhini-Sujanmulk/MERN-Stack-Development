const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/contact", (req, res) => {
	res.send("Contact Me");
});

app.get("/about", (req, res) => {
	res.send("About Me");
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
