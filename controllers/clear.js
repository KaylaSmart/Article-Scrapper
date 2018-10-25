var db = require("../models");

module.exports = {
    clearDB: function(req,res){
        db.Article.remove({})
            .then(function() {
                return db.comment.remove({});
            })
            .then(function(){
                res.json({ ok: true});
            });
    }
};

