const JsonResponse = require('../Services/JsonResponseService');

const badRequestResponse = (req, res) => {
    let apiResponse = JsonResponse([], false, 'Bad request- method not allowed');
    res.json(apiResponse);
}

module.exports.badRequestResponse = badRequestResponse;
