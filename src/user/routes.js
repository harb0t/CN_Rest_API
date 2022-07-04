const { Router } = require("express"); // import router method only from express
const { signUp } = require("./controllers"); //import only signup from controllers file
const userRouter = Router(); //create a router that can have endpoints added to it

// higher order function... signup isn't signup() ... with it not there when end point is hit then it is called on
userRouter.post("/user", signUp); // defining a post request on /user path that calls the signUp controller

module.exports = userRouter;