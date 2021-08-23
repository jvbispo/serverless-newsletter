
const bodyParserMiddleware = (req, res, next) => {
    req.body = JSON.parse(req.apiGateway.event.body)
    next();
};


module.exports = bodyParserMiddleware;