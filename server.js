const express = require('express');

const app = express();

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});

// app.get('/', (req, res) => {
//     res.send('Hello, world! This is Bird!');
// });
const birds = require("./db/birds");

app.get("/",  (req, res) => {
    res.json(birds);
});

app.get("/birds/:id.json", function (req, res) {

    const x = req.params.id;
    res.json(birds[x]);
    console.log(req.params);
});


