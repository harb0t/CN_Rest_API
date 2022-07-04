const User = require("./model");

// exports.signUp = async (request, response) => {

// }


// abrv
// exports.signUp = async (req, res) => {
    
// }

exports.signUp = async (req, res) => {
    try {
        //makes request and send it to body (putting stuff in the box = body. The body is AN OBJECT)
        //dot notation to access into body
        // req.body.username
        // const newUser = await User.create({username: "Steve", email: "steve@email.com", password: "test123"});

        // const newUser = await User.create({
        //     username: req.body.username,
        //     email: req.body.email,
        //     password: req.body.password,
        // });

// DRY

        const newUser = await User.create(req.body); //req.body is an object that contains k/v pairs that match my User ... something something
        res.send({user: newUser});
    } catch (error) {
        console.log(error);
        // BELOW BRINGS ERROR TO CLOSE
        res.send({error});
    }
    
};