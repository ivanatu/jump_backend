var mongoose = require('mongoose');

var CacheSchema = mongoose.Schema({
    cacheString: String
});

module.exports = mongoose.model('Cache', CacheSchema);
