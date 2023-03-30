let mode = process.env.MODE

export const globalError = (err, req, res, next) => {
    if (mode == 'dev') {
        prodMode(err, res)
    } else {
        devMode(err, res)
    }
}

const prodMode = (err, res) => {
    let code = err.statusCode || 500
    res.status(code).json({
        msg: "catch error",
        error: err.message,
        statusCode: code,
        stack: err.stack
    })

}

const devMode = (err, res) => {
    let code = err.statusCode || 500
    res.status(code).json({
        msg: "catch error",
        error: err.message,
        statusCode: code,
        stack: err.stack
    })

}