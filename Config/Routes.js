const IpsumController = require('../Controllers/IpsumController');
const BadRequestController = require('../Controllers/BadRequestController')

const routes = (app) => {
    app.get('/ipsum', IpsumController.getIpsum);

    app.post('/ipsum', BadRequestController.badRequestResponse);

    app.put('/ipsum', BadRequestController.badRequestResponse)

    app.delete('/ipsum', BadRequestController.badRequestResponse)
}

module.exports = routes
