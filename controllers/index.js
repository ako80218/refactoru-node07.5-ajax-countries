
/*
 * GET home page.
 */
var countriesModel= require('../models/countries.js');

module.exports={
    index: function(req, res){
        res.render('index', { 
    title: 'Countries of the World' 
    });
    }
}