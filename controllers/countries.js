var countriesModel = require('../models/countries.js');
module.exports = {
    index: function(req, res){
        var data = countriesModel.countries();
        res.send(data);
    },
    search: function(req, res){
        var data = req.query;
        var returnedCountries = countriesModel.find(data.searchTerm);
        res.send(returnedCountries);
    },
    flag: function(req, res){
        var data = req.query;
        console.log(data.searchTerm);
        // var returnedCountries = countriesModel.find(data.searchTerm);
        // returnedCountries[0].hasTraveled();
        // returnedCountries[0].property =7;
        var holder = countriesModel.hasTraveled(data.searchTerm);
        console.log('holder: ', holder);
        res.send('Success');
    }
};