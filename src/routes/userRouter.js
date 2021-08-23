const { Router } = require('express');
const userController = require('../controllers/userController');

const userRouter = Router();

userRouter.get('/all', userController.fetch);

userRouter.post('/', userController.create);

module.exports = userRouter;