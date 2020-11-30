module.exports = class ApiError extends Error {
    constructor(message, status) {
        super(message, status)

        this.status = status || 500
        this.message = message

        this.name = "ApiError"
    }
}