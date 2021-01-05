$(document).ready(function() {
    // var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=gnonuSaxEo5iK92FxNJduzfDGBhhhehk";

    function search() {
        var searchTerm = $("#searchTerm").val();
        var numRecords = $("#articleRetrieve").val();
        var startYear = $("#startYear").val();
        var endYear = $("#endYear").val();

        var queryURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=gnonuSaxEo5iK92FxNJduzfDGBhhhehk&fq=source:("The New York Times")&q='+searchTerm;
        if (startYear!=="") {
            queryURL += "&begin_date="+startYear+"0101";
        }
        if (endYear!=="") {
            queryURL += "&end_date="+endYear+"1231";
        }

        $.ajax({
            url: queryURL,
            method: "GET"
          })
            .then(function(response) {
                console.log(queryURL);
                console.log(response);




        });

    }



    $(".fa-search").on("click", search);

});