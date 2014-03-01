var countriesModel = require('../models/countries.js');
var mongoose = require('mongoose');
var Country = countriesModel.mongooseModel
module.exports = {
    index: function(req, res){
        Country.find({}, function(err,docs){
            if(err){
                console.log(err);
            }
            res.send(docs);
        });
    },
    search: function(req, res){
        Country.find({}, function(err, docs){
            var filteredCountries =[];
            for(var i=0; i < docs.length; i++){
                var countryName = docs[i].name
                if (countryName.indexOf(req.query.searchTerm) !== -1){
                    filteredCountries.push(docs[i]);
            }
        }
        console.log('filteredCountries: ', filteredCountries);
    res.send(filteredCountries);
})

        
    },
    flag: function(req, res){
        var data = req.query;
        // console.log(data.searchTerm);
        // var returnedCountries = countriesModel.find(data.searchTerm);
        // returnedCountries[0].hasTraveled();
        // returnedCountries[0].property =7;
        countriesModel.hasTraveled(data.searchTerm);
        res.send('Success');
    }
};