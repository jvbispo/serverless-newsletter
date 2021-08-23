const { Router } = require('express');
const userRouter = require('./userRouter');

const routes = Router();

routes.use('/user', userRouter);

module.exports = routes;