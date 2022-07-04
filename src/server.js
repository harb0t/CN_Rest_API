//connection initialised (instantly runs DB connection)
require("./db/connection")
// imports / pull in express module
const express = require("express");

const userRouter = require("./user/routes"); //Bring in all endpoints connected to userRouter

//create webserver constant to manipulate
const app = express();
//store either supplied port or 5001
const port = process.env.PORT || 5001;


// ORDER BELOW V IMPORTANT

// only after nxt line has express access to json
// parses all requests as if they are JSON sends all responses as JSON
app.use(express.json());
// .use to ADD things to server so it can be USED


// USERROUTER REQUIRES ABOVE LINE FIRST TO RUN JSON DATA
app.use(userRouter);


//NEEDS ABOVE LINE
app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});
//listening on port 5001 or provided port on current location (localhost)