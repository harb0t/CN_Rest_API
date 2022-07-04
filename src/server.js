//connection initialised (instantly runs DB connection)
require("db/connection")
// imports / pull in express module
const express = require("express");
//create webserver constant to manipulate
const app = express();
//store either supplied port or 5001
const port = process.env.PORT || 5001;


// only after nxt line has express access to json
// parses all requests as if they are JSON sends all responses as JSON
app.use(express.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
//listening on port 5001 or provided port on current location (localhost)