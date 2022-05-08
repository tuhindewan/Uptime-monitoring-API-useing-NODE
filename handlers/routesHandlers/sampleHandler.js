/**
 * Title: Sample Handler
 * Description: Sample Handler
 * Author: Saiduzzaman Tohin
 * Date: 06/05/2022
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
    callback(200, {
        message: 'This is a sample url',
    });
};

module.exports = handler;
