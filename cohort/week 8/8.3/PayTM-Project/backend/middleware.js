const jwt = require("jsonwebtoken");
const { JWT_SECRET} = require("./config");

const authMiddelware = (req,res,next) =>{
    // check if the token is present
    const authHeader = req.headers.authorization;
    // if not present then return 403
    if(!authHeader || !authHeader.startsWith('Bearer ')){
        return res.status(403).json({});
    }
    // get the token
    const token = authHeader.split(' ')[1];
     
    try{
        // verify the token
        const decoded = jwt.verify(token,JWT_SECRET);
        // if token is valid then add the user id to the request object
        req.userId = decoded.userId;
        // call the next function
        next();
    }
    catch(err){
        // if token is not valid then return 403
        return res.status(403).json({});
    }
}


module.exports = {
    authMiddelware
}