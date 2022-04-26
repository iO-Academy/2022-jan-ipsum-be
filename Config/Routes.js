const IpsumController = require('../Controllers/IpsumController');

const routes = (app) => {
    app.get('/ipsum', IpsumController.getIpsum);
    //
    // app.post('/ipsum', //badRequestController);
    //
    // app.put('/ipsum', //badRequestController);
    //
    // app.delete('/ipsum', //badRequestController);

}

module.exports = routes;