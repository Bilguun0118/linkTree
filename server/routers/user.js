const { Router } = require("express");
const { login, register } = require("../controllers/UserController");
const userRouter = Router();
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);
module.exports = { userRouter }