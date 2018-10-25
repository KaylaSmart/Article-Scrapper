var mongoose = require("mongoose");
//save schema

var Schema = mongoose.Schema;

// create a schema for the article
// must have at least Headline, url, summary 

var newArticle = new Schema({

    headline: {
        type: String,
        required: true,
        id:{index: {unique:true }} 

    },
    url: {
        type: String,
        required: true
    },
    Summary:{
        type: String,
        required: true
    }

});


var Article = mongoose.model("Article", newArticle);

module.exports = Article;