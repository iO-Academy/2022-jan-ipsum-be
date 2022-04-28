const JsonResponseService = (
    data = [],
    success = false,
    message = 'Something went wrong- No results',
    status = 200
) => {
    return {
        "success": success,
        "message": message,
        "status": status,
        "data": data
    }
}

module.exports = JsonResponseService
