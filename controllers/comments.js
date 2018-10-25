var db = require("../models");

module.exports = {
    find: function(res,req){
        db.comment.find({_articleId: req.params.id}).then(function(dbcomment){
            res.json(dbcomment);

        });
    },

    create: function(res,req){
        db.comment.create(req.body).then(function(dbcomment){
            res.json(dbcomment);
        });
    },

    delete: function(req, res){
        db.comment.delete({_id: req.params.id}).then(function(dbcomment){
            res.json(dbcomment);
        });
    }
};