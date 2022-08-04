var Cache = require('../models/cache.model.js');

exports.findOne = function(req, res) {
    // Find a single cache with a cacheId
    if (!req.headers.authorization) {
        return res.json({ error: 'No Authorization provided!' });
    } 
    res.setHeader("JUMP-AUTH-TOKEN","This is the token");
    Cache.findById(req.params.cacheId, function(err, data) {
        if(err) {
            console.log("Cache missing");
            var cache = new Cache({cacheString: Math.random().toString(36).substring(2,7)});
            cache.save(function(err, data){
                if(err) {
                    res.status(500).send({message: "Error saving " + cache.cacheString});
                } 
                else {
                    res.send(data);
                }
            });
        } else {
            console.log("Cache hit");
            res.send(data);
        }
    });
};

exports.delete = function(req, res) {
    // Delete a note with the specified noteId in the request
    Cache.remove({_id: req.params.cacheId}, function(err, data) {
        if(err) {
            res.status(500).send({message: "Could not delete cache with id " + req.params.id});
        } else {
            res.send({message: "Cache deleted successfully!"})
        }
    });
};

