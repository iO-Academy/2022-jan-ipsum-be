const DbService = require('../Services/DbService');
const JsonResponse = require('../Services/JsonResponseService');
const getIpsumService = require('../Services/IpsumService');
const {arrayToParagraph} = require("../Services/ParagraphService");

const getIpsum = async (req, res) => {
    let numberOfWords = 20;
    let collection = await DbService('ipsum');
    let data = await getIpsumService(collection, numberOfWords);
    let result = [arrayToParagraph(data)];

    let apiResponse = result.length
        ? JsonResponse(result, true, 'Success- results found')
        : JsonResponse();

    res.json(apiResponse);
}

module.exports.getIpsum = getIpsum;
