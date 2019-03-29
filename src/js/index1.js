$(document).ready(function() {

    $('#facilities').click(function(e) {
            $("#facilities").css({
        "border-bottom": "2px solid red",
        "color": "black"
        });
    $("#reviews").css({
        "border-bottom": "0px solid red",
        "color": "#888888"
    });
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "html",
            type: "GET",
            data: { format: "html-list"},
            success: function(data) {
                for(i=1; i<=10; i++){
                console.log("SUCCESS HTML:", data);
                
                $("#p" +i ).html(data);
                }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                $("#p1").text(jqXHR.statusText);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
            }

        });
    });
    // GET A LIST OF 'THINGS' FROM THE SERVER AS JSON DATA
    $('#reviews').click(function(e) {
    $("#reviews").css({
        "border-bottom": "2px solid red",
        "color": "black"
    });    $("#facilities").css({
        "border-bottom": "0px solid red",
        "color": "#888888"
    });
        // don't allow the anchor to visit the link
        e.preventDefault();

        $.ajax({
            url: "/ajax-GET-list",
            dataType: "json",
            type: "GET",
            data: { format: "json-list"},
            success: function(data) {
                console.log("SUCCESS JSON:", data);
                
                for(i = 0; i<data.length; i++) {
                $("#p" + i+1).append('<p>' + data[i]['comment']+ '</p>');
                    console.log(data[i]['comment']);
                }
//                let htmlStr = "";
//                for(let i = 0; i < data.length; i++) {
//                    htmlStr += "<li>" + data[i] + "</li>";
//                }
//                htmlStr += "</ul>";
//                    htmldiv.html(htmlStr);
//                }

            },
            error: function(jqXHR, textStatus, errorThrown) {
                for(i =1; i<=10; i++){
                $("#p" + i).text(jqXHR.jqXHR);
                console.log("ERROR:", jqXHR, textStatus, errorThrown);
                }
            }
        });
    });
});