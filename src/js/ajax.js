$(document).ready(function () {
    function ajaxGetReviews() {
        $.ajax({
            url: "/ajax-GET-tab-content",
            dataType: "html",
            type: "GET",
            data: {
                format: "html",
                tab: "reviews"
            },
            success: function (data) {
                console.log("SUCCESS HTML:", data);
                $("#info-items").html(data);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    }

    function ajaxGetFacilities() {
        $.ajax({
            url: "/ajax-GET-tab-content",
            dataType: "json",
            type: "GET",
            data: {
                format: "json",
                tab: "facilities"
            },
            success: function (data) {
                console.log("SUCCESS JSON:", data);
                var html = "";
                for (i = 0; i < data.length; i++) {
                    html += "<div class=\"infoItems\">";
                    html += "<div class=\"location\">";
                    html += "<p class=\"locationName\">" + data[i]['name'] + "</p>";
                    html += "<p class=\"address\">" + data[i]['city'] + "</p>";
                    html += "</div>";
                    html += "<div class=\"mapbox\">"
                    html += data[i]['map'];
                    html += "</div></div>"
                };
                $("#info-items").html(html);
            },
            error: function (jqXHR, textStatus, errorThrown) {
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }
        });
    }

    function clickFacilities() {
        $("#facilities").css({
            "border-bottom": "2px solid red",
            "color": "black"
        });
        $("#reviews").css({
            "border-bottom": "0px solid red",
            "color": "#888888"
        });
        ajaxGetFacilities();
    }

    function clickReviews() {
        $("#reviews").css({
            "border-bottom": "2px solid red",
            "color": "black"
        });
        $("#facilities").css({
            "border-bottom": "0px solid red",
            "color": "#888888"
        });
        ajaxGetReviews();
    }

    $('#facilities').click(function (e) {
        clickFacilities();
    });

    $('#reviews').click(function (e) {
        clickReviews();
    });

    // On start up
    clickFacilities();
});