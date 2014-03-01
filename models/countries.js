 var mongoose = require('mongoose');
var CountrySchema = new mongoose.Schema({
    name: String,
    frenchName: String,
    localName: String,
    visited:{type:Boolean, default: false}
});
var Country = mongoose.model('countries', CountrySchema);

//     var filteredCountries =[];
//     for(var i=0; i < allCountries.length; i++){
//         var countryName = allCountries[i].name
//         if (countryName.indexOf(query) !== -1){
//             filteredCountries.push(allCountries[i]);
//         }
//     }
//     return filteredCountries;
// };
var hasTraveled = function(query){
    for(var i=0; i<countries.length; i++){
        var countryName = countries[i].name;
        if (countryName.indexOf(query) !== -1){
            countries[i].visited=!countries[i].visited;
            console.log("countries[i]: ", countries[i]);
        }
    }
}
// var countriesModel = module.exports = mongoose.model('countries', CountrySchema)
var countriesModel=module.exports ={
    countries : function(){
        var allCountries;
        Country.find({}, function(err,docs){

            allCountries=docs;
    });
        console.log("allCountries: ", allCountries);
        return allCountries;
    },
    // find: find,
    hasTraveled: hasTraveled,
    mongooseModel : Country
}