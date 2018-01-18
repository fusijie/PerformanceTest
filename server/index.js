let express = require("express");
let bodyParser = require("body-parser");
let cors = require("cors");

let data = [
	{
		platform: 'OS X',
		time: 1516264431454,
		data:
			[
				null,
				{
					name: 'Bunny Test(iPhone 6, Safari, 2600)',
					maxTime: 14,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Bunny Test(Vivo Y66, Chrome, 1500)',
					maxTime: 8,
					minTime: 0,
					avgFps: '60'
				},
				null,
				{
					name: 'Prefab Bunny Test(iPhone 6, Safari, 2600)',
					maxTime: 9,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Prefab Bunny Test(Vivo Y66, Chrome, 1500)',
					maxTime: 8,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Bunny Add/Remove Test',
					maxTime: 44,
					minTime: 0,
					avgFps: '59'
				},
				{ name: 'Bunny Tree Test', maxTime: 19, minTime: 0, avgFps: '60' },
				{
					name: 'Bunny Active/Inactive Test',
					maxTime: 18,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Bunny Transform Animation Test',
					maxTime: 13,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Bunny Frame Animation Test',
					maxTime: 8,
					minTime: 0,
					avgFps: '60'
				},
				{
					name: 'Bunny Transform Action Test',
					maxTime: 14,
					minTime: 0,
					avgFps: '60'
				}]
	}
];

let app = express();
app.use(cors());
app.options("*", cors());

// create application/json parser
let jsonParser = bodyParser.json();

app.post("/upload_result", jsonParser, function (req, res) {
	if (!req.body) {
		return res.sendStatus(400);
	}
	console.log(req.body);
	data.push(req.body);
	res.send(req.body);
});

app.post("/get_result", jsonParser, function (req, res) {
	res.send(data);
});

app.listen(30000, () => console.log("Example app listening on port 30000!"));