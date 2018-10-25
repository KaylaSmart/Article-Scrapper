var db = require("../models");
var scrape = require("../scripts/scrape");


module.exports = {
    scrapeArticles: function(req, res){

        return scrape()
            .then(function(articles){
                return db.Article.create(articles);
            })
      .then(function(dbArticle){
            if(dbArticle.length === 0) {
                res.json({
                    message: "No articles, dude"
                });
            }
            else{
                res.json({
                    message: " We have" + dbArticles.length + "new stories"
                });
            }
        })
        .catch(function(err){
            res.json({
                message: " scrape complete !"
            });
        });
    }
};