var countriesModel = require('../models/countries.js');
module.exports = {
    index: function(req, res){
        var data = countriesModel.countries();
        res.send(data);
    },
    search: function(req, res){
        var data = req.query;
        res.send(data);
    }
};