// var tacoGeneratorApi = ;

$("button").on("click", function(event) {
    event.preventDefault();
    var x = $(this).data("search");
    console.log(x);

    var queryURL = "https://taco-randomizer.herokuapp.com/random/";

    $.ajax({ url: queryURL, method: "GET" })
        .done(function(reponse) {
            console.log(response);
            // console.log(reponse.data[0].rating);
        });
});

// TEMPORARY TEST
var queryURL = "https://taco-randomizer.herokuapp.com/random/";

$.ajax({ url: queryURL, method: "GET" })
    .done(function(response) {
        console.log(response);
        // console.log(reponse.data[0].rating);
    })