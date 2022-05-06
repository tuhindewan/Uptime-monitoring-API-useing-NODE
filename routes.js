/**
 * Title: Routes
 * Description: Application routes
 * Author: Saiduzzaman Tohin
 * Date: 06/05/2022
 */

// dependencis
const { sampleHandler } = require('./handlers/routesHandlers/sampleHandler');

// module scaffolding
const routes = {
    sample: sampleHandler,
};
module.exports = routes;
