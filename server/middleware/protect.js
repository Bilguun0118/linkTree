const jwt = require("jsonwebtoken");
const asyncHandler = require ("express-async-handler");
const { MyError } = require("../utils/MyError");
const protect = asyncHandler(async (req, res, next) => {
    if(!req.headders.authorization) {
        throw new MyError("ene uildeliin hiihed tanii erh hurehgui bn. Ta ehleed newterj oroh ystoi!", 401);
    }
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
        throw new MyError("Ta ehleed newtrej oroh uu!", 400);
    }

    const tokenObj = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = tokenObj.id;
    req.userName = tokenObj.name;
    next();
});

module.exports = {protect}