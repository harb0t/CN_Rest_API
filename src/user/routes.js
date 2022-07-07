const { Router } = require("express"); // import router method only from express
const { signUp, login, find, findAll, update, delUser,} = require("./controllers"); //import only signUp from controllers file
const { hashPass,  unhashPass  } = require("../middleware");
const userRouter = Router(); //create a router that can have endpoints added to it



// higher order function... signup isn't signup() ... with it not there when end point is hit then it is called on
userRouter.post("/user",hashPass, signUp); // defining a post request on /user path that calls the signUp controller
userRouter.post("/login",unhashPass, login); //defining a post request on /login path, that calls the login controller

// WIP

userRouter.get("/user/:username", find); //defining a get request on /user:username path, that calls the find controller
userRouter.get("/findAll", findAll); //defining a get request on /users path, that calls the findAll controller
userRouter.patch("/user", update); //defining a put request on /user path, that calls the update controller
userRouter.delete("/user/:username", delUser) //defining a delete request on /user/:username path, that calls the delUser controller


module.exports = userRouter;