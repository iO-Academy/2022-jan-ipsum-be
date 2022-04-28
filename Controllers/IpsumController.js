const DbService = require('../Services/DbService')
const JsonResponse = require('../Services/JsonResponseService')
const getIpsumService = require('../Services/IpsumService')
const {multipleParagraphs} = require("../Services/ParagraphService")

const getIpsum = async (req, res) => {
    let paragraphs = 1

    if (req.query.paragraphs && (req.query.paragraphs >= 1 && req.query.paragraphs <= 10)) {
        paragraphs = req.query.paragraphs
    }

    if (req.query.paragraphs && !(req.query.paragraphs >= 1 && req.query.paragraphs <= 10)) {
        let apiResponse = JsonResponse([], false, 'Please pick a number between 1 and 10');
         return res.json(apiResponse)
    }

    let collection = await DbService('ipsum')
    let data = await getIpsumService(collection)
    let result = multipleParagraphs(paragraphs, data)

    let apiResponse = result.length
        ? JsonResponse(result, true, 'Success- results found')
        : JsonResponse()

    res.json(apiResponse)
}

module.exports.getIpsum = getIpsum
