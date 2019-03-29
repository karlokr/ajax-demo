$(document).ready(function() {    
    function ajaxGetFacilities() {
        $.ajax({
            url: "/ajax-GET-tab-content",
            dataType: "html",
            type: "GET",
            data: {format: "html", tab: "facilities"},
            success: function(data) {
                console.log("SUCCESS HTML:", data);
                for(i = 1; i <= data.length; i++){
                    $("#p" + i).html(data);
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    }
    
    function ajaxGetReviews() {
        $.ajax({
            url: "/ajax-GET-tab-content",
            dataType: "json",
            type: "GET",
            data: {format: "json", tab: "reviews"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                for(i = 1; i <= data.length; i++) {
                    $("#p" + i).append('<p>' + data[i]['comment']+ '</p>');
                    console.log(data[i]['comment']);
                }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                for(i = 1; i <= data.length + 1; i++){
                    $("#p" + i).text(jqXHR.jqXHR);
                    console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }
            }
        });
    }
    
    $('#facilities').click(function(e) {
        $("#facilities").css({
            "border-bottom": "2px solid red",
            "color": "black"
        });
        $("#reviews").css({
            "border-bottom": "0px solid red",
            "color": "#888888"
        });
        ajaxGetFacilities();
    });
    
    $('#reviews').click(function(e) {
        $("#reviews").css({
            "border-bottom": "2px solid red",
            "color": "black"
        });    
        $("#facilities").css({
            "border-bottom": "0px solid red",
            "color": "#888888"
        });
        ajaxGetReviews();
    });
    
    // On start up
    ajaxGetReviews();
});
