var axios = require("axios");
var cheerio = require("cheerio");
var app = express();


//routes
app.use("./routes");
//get routes for the article site I select

app.get("/scrape", function(req, res){
    axios.get("https://www.theverge.com/").then(function(response){

    var $ = cheerio.load(response.data); // $ shorthand selector

    var articles = [];
    
    $("body h2").each(function(i,element){

        var result = {};

         result.title = $(this)
            .children("a")
            .text();
        result.link = $(this)
            .children("a")
            .attr("href");


         result.summary = $(this)
            .children("a")
            .attr("c-byline");

        if ( result.title && result.link && result.summary){
            var addArticle ={
                title: result.title,
                url: result.link,
                summary: result.summary
            }
            articles.push(addArticle);
        }
        });
        return articles;
    });
});


module.exports = scrape;