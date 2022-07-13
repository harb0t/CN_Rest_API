const bcrypt = require("bcryptjs");
const User = require("../user/model")

exports.hashPass = async (req, res, next) => {

    // none DRY version
        // try {
        //     const tempPass = req.body.password; // grabbed password variable from body and stored it locally
        //     // salt?
        //     const hashedPass = await bcrypt.hash(tempPass, 8); // hashed the password and stored it in a new constant
        //     req.body.password = hashedPass //stores freshly hashed password back in req body
        //     next(); // moves onto next middleware/controller in endpoint
        // } catch (error) {
        //     console.log(error);
        //     res.send({error});
        // }

    //DRY VERSION
    try {
        if (req.body.password) {
            req.body.password = await bcrypt.hash(req.body.password, 8); 
        } else if (req.body.updateObj.password) {
            req.body.updateObj.password = await bcrypt.hash(
            req.body.updateObj.password,
            8
            );
        }
        
        
        
        next(); //moves onto next middleware/controller in endpoint
        } catch (error) {
            console.log(error);
            res.send({ error });
        }
};

//unhashPass: takes password input, hash's it and then compares it to the hashed password in the database.
exports.unhashPass = async (req, res, next) => {
    try {
    req.user = await User.findOne({ username: req.body.username });
    if (await bcrypt.compare(req.body.password, req.user.password)) {
        next();
    } else {
        throw new Error("Incorrect credentials");
    }
    } catch (error) {
    console.log(error);
    res.send({ error });
    }
};

