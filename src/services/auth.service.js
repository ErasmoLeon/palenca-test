
const authBase = require('../mockData/auth');
const BadCredentialsException = require("../exceptions/BadCredentialsException")
const InvalidTokenException = require("../exceptions/InvalidTokenException")

const doAtuh = (email) => {
    const user = authBase.find((user) => user.email == email);
    if (!user) {
        throw new BadCredentialsException("Bad credentials");
    }
    return user;
}

const verifyToken = (accessToken) => {
    const userInfo = authBase.find((user) => user.access_token == accessToken);
    if (!userInfo) {
        throw new InvalidTokenException("Bad credentials");
    }
    return userInfo;
}

module.exports.verifyToken = verifyToken;
module.exports.doAtuh = doAtuh;