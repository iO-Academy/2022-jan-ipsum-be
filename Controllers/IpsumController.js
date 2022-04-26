const DbService = require('../Services/DbService');
const JsonResponse = require('../Services/JsonResponseService');
const getIpsumService = require('../Services/IpsumService');

const getIpsum = async (req, res) => {
    let collection = await DbService('ipsum');
    let result = await getIpsumService(collection);

    let apiResponse = result.length
        ? JsonResponse(result, true, 'Success- results found')
        : JsonResponse();

    res.json(apiResponse);
}

module.exports.getIpsum = getIpsum;