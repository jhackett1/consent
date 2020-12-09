module.exports = {
    errorHandler: (err, req, res, next) => {
        console.error(err)
        const status = err.status || 500
        res.status(status)
        res.json({ 
            status: status,
            error: err.message 
        })
    },

    fallbackHandler: (req, res, next) => {
        res.status(404)
        res.json({ 
            error: "No endpoint matches your request"
        })
    }
}