let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(cors());
app.options("*", cors());

// create application/json parser
let jsonParser = bodyParser.json()

app.post("/upload_result", jsonParser, function (req, res) {
	if (!req.body) {
		return res.sendStatus(400);
	}
	console.log(req.body);
	res.send(req.body);
})

app.listen(30000, () => console.log("Example app listening on port 30000!"));