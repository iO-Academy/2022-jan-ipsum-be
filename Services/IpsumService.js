const getIpsumService = async (collection) => {
    return await collection.find({}).toArray();
}

module.exports = getIpsumService;
