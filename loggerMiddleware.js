const loggerMiddleware = (req, res, next) => {
    const currentDateTime = new Date()
    const ipAddress = req.headers['x-forwarded-for'] || req.connection.remoteAddress

    console.log(`[${currentDateTime}] - ${req.method} ${req.url} - IP: ${ipAddress}`)
    next()
}

module.exports = { loggerMiddleware }