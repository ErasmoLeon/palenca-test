class InvalidTokenException extends Error {
    constructor(message) {
        super(message)
        this.name = this.constructor.name
        Error.captureStackTrace(this, this.constructor);
        this.isSleepy = true
    }
}

module.exports = InvalidTokenException  