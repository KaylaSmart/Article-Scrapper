// behaviors of the application
$.getJSON("/articles", function(data){
    //loop over data

    for(var i = 0; i< data.length; i++){
        //what will be displayed- the headline,the summary of the article , link
        $("#articles").append("<p data-id='" + data[i].id + "'>" + data[i].title + "<br />" + data[i].url + data[i].summary +"</p>" + "<br>");

    }
});

$(document).on("click", "h2", function(){

    $("#comments").empty();

    var thisId =$(this).attr("data-id");

    
$.ajax({
    method: "GET",
    url: "/articles/" + thisId 
})
    .then(function(data){
        console.log(data);
        //append the following to the article seciton
        $("comments").append("<h3>" + data.title +  "</h3>");
        //an input to add a new comment
        $("#comments").append("<textarea id='commentinput' name='body'> </textara>");
        // button to submit the comment
        $("#comments").append("<button data-id='" + data._id + "' id='savecomment'>Add Comment</button>");

        if(data.comment){
            $("#bodyinput").val(data.comment.body);
        }
    });
});

$(document).on("click", "#savenote", function(){
    var thisId = $(this).attr("data-id");

    $.ajax({
        method: "POST",
        data: {
            title:$("commentinput").val(),
            body: $("bodyinput").val()
        }
    })
    .then(function(data){
        console.log(data);
        $("comments").empty();
    });
    $("commentinput").val("");
    $("bodyinput").val("");

});