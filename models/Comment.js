var mongoose= require("mongoose");
var Schema = mongoose.Schema;


var NewComment = new Schema({
    title:{
        type:String,
        required: true,
    },
    body:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    comment:{
        type: Schema.Types.ObjectId,
        ref: "Article"
    }
});


var comment = mongoose.model("Comment",NewComment);

module.exports = comment;

