module.exports = function(app) {

    var caches = require('../controllers/cache.controller.js');

    // Retrieve a single cache with cacheId
    app.get('/cache/:cacheId', caches.findOne);

    // Delete a cache with cacheId
    app.delete('/cache/:cacheId', caches.delete);
}