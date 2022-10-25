const BadCredentialsException = require("../exceptions/BadCredentialsException");
const InvalidTokenException = require("../exceptions/InvalidTokenException");

const errorHandler = (e, res) => {
    if (e instanceof InvalidTokenException) {
        res.status(401).send({
            message: "CREDENTIALS_INVALID",
            details: "Incorrect token"
        });
    } else if (e instanceof BadCredentialsException) {
        res.status(401).send({
            message: "CREDENTIALS_INVALID",
            details: "Incorrect username or password"
        });
    } else {
        console.error(e);
        res.status(500).send({
            message: "INTERNAL_SERVER_ERROR"
        });
    }
}

module.exports = errorHandler;